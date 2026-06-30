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
const webhook = process.env.N8N_WEBHOOK || env.N8N_WEBHOOK || '';

if (!webhook) {
    console.warn('⚠️  N8N_WEBHOOK no definido. El formulario no enviará datos.');
}

// Copiar y reemplazar en script.js
const src = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
const out = src.replace("'{{URL_N8N_WEBHOOK}}'", JSON.stringify(webhook));

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
fs.writeFileSync(path.join(distDir, 'script.js'), out);

// Copiar el resto de archivos estáticos
const staticFiles = [
    'index.html', 'styles.css', 'gracias.html',
    'prompts-claude.html', 'cheatsheet.html',
    'guia-inicio.html', 'email-descarga.html',
    'Webinar junlio 2026.blueprint.json'
];

staticFiles.forEach(file => {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(distDir, file));
    }
});

// Copiar imágenes si existen
['logo-afcademia.png', 'icono-afcademia.webp', 'banner.jpeg', 'afcademia_header_email.png'].forEach(file => {
    const src = path.join(__dirname, file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(distDir, file));
});

console.log('✅ Build completado → dist/');
