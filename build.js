// Script de build: inyecta variables de .env en script.js → dist/script.js
const fs = require('fs');
const path = require('path');

// Leer .env si existe
const envPath = path.join(__dirname, '.env');
const env = {};
if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8')
        .split('\n')
        .forEach(line => {
            const [key, ...rest] = line.split('=');
            if (key && rest.length) env[key.trim()] = rest.join('=').trim();
        });
}

// Variables de entorno del sistema tienen prioridad (para Vercel/CI)
const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL      || env.NEXT_PUBLIC_SUPABASE_URL      || '';
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl) console.warn('⚠️  NEXT_PUBLIC_SUPABASE_URL no definido.');
if (!supabaseKey) console.warn('⚠️  NEXT_PUBLIC_SUPABASE_ANON_KEY no definido.');

// Copiar y reemplazar en script.js
const src = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
const out = src
    .replace("'{{SUPABASE_URL}}'",      JSON.stringify(supabaseUrl))
    .replace("'{{SUPABASE_ANON_KEY}}'", JSON.stringify(supabaseKey));

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
fs.writeFileSync(path.join(distDir, 'script.js'), out);

// Copiar el resto de archivos estáticos
const staticFiles = [
    'index.html', 'styles.css', 'gracias.html',
    'prompts-claude.html', 'cheatsheet.html',
    'guia-inicio.html', 'email-descarga.html'
];


staticFiles.forEach(file => {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(distDir, file));
    }
});

// Copiar archivos de lead-magnet
const leadMagnetFiles = ['guia-rapida.html', 'cheatsheet.pdf', 'prompts-claude.pdf', 'guia-inicio.pdf', 'guia-rapida.pdf'];
leadMagnetFiles.forEach(file => {
    const src = path.join(__dirname, 'lead-magnet', file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(distDir, file));
});

// Copiar slides del ponente (imágenes embebidas, funciona como archivo único)
const slidesSrc = path.join(__dirname, 'lead-magnet', 'material-ponente', '02-presentacion', 'slides.html');
if (fs.existsSync(slidesSrc)) fs.copyFileSync(slidesSrc, path.join(distDir, 'slides-ponente.html'));

const slidesPdfSrc = path.join(__dirname, 'lead-magnet', 'material-ponente', '02-presentacion', 'slides.pdf');
if (fs.existsSync(slidesPdfSrc)) fs.copyFileSync(slidesPdfSrc, path.join(distDir, 'slides-ponente.pdf'));

// Copiar blueprint con nombre limpio para URL
const blueprintSrc = path.join(__dirname, 'Webinar junlio 2026.blueprint.json');
if (fs.existsSync(blueprintSrc)) {
    fs.copyFileSync(blueprintSrc, path.join(distDir, 'make-blueprint.json'));
}

// Copiar imágenes si existen
['logo-afcademia.png', 'afcademia_logo_nuevo.png', 'icono-afcademia.webp', 'banner.jpeg', 'afcademia_header_email.png'].forEach(file => {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(distDir, file));
});

console.log('✅ Build completado → dist/');
