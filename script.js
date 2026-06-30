// =========================================
// AFCademIA — Landing Webinar IA Scripts
// =========================================

const SUPABASE_URL = '{{SUPABASE_URL}}';
const SUPABASE_KEY = '{{SUPABASE_ANON_KEY}}';

const SOURCE = 'webinar-julio-2026-administrador-fincas';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Fade-in animations ---
    const fadeElements = document.querySelectorAll(
        '.problem-card, .resource-card, .step, .result-card, .testimonial-card, .faq-item, .contact-info, .contact-form'
    );
    fadeElements.forEach(el => el.classList.add('fade-in'));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- Hero card bar animation ---
    const barFill = document.querySelector('.hero-card-bar-fill');
    if (barFill) setTimeout(() => barFill.classList.add('animated'), 500);

    // --- Counter animation ---
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
                counterObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(c => counterObserver.observe(c));

    function animateCounters() {
        counters.forEach(counter => {
            const target    = parseInt(counter.dataset.target);
            const duration  = 1800;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed  = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased    = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(eased * target).toLocaleString('es-ES');
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    // --- Form submit ---
    document.querySelectorAll('.lead-form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn        = form.querySelector('[type="submit"]');
            const nombre     = form.querySelector('[name="nombre"]').value.trim();
            const email      = form.querySelector('[name="email"]').value.trim();
            const privacidad = form.querySelector('[name="privacidad"]');

            if (!nombre || !email || (privacidad && !privacidad.checked)) return;

            btn.textContent = 'Enviando...';
            btn.disabled    = true;

            const now = new Date().toISOString();

            // 1. Registrar lead vía RPC (maneja leads nuevos y existentes + flujos_embudo)
            try {
                const { error } = await supabaseClient.rpc('registrar_lead_webinar', {
                    p_nombre:       nombre,
                    p_email:        email,
                    p_source:       SOURCE,
                    p_nombre_flujo: 'webinar-julio-2026',
                    p_tags:         ['webinar-2026', 'julio-2026', 'ia-administrador-fincas'],
                });

                if (error) {
                    console.error('Supabase error:', error.message);
                    showFormMessage(form, 'error', '❌ ' + error.message);
                    btn.textContent = 'Enviar';
                    btn.disabled = false;
                    return;
                }
            } catch (err) {
                console.error('Supabase error:', err);
                showFormMessage(form, 'error', '❌ Error al enviar. Inténtalo de nuevo.');
                btn.textContent = 'Enviar';
                btn.disabled = false;
                return;
            }

            // 2. Mostrar éxito y redirigir
            showFormMessage(form, 'success', '✅ ¡Registrado! Redirigiendo...');
            setTimeout(() => { window.location.href = 'gracias.html'; }, 1500);
        });
    });

    function showFormMessage(form, type, text) {
        let msg = form.querySelector('.form-message');
        if (!msg) {
            msg = document.createElement('p');
            msg.className = 'form-message';
            msg.style.cssText = 'margin-top:10px;padding:10px 14px;border-radius:6px;font-size:.88rem;text-align:center;font-weight:500;';
            form.appendChild(msg);
        }
        msg.textContent = text;
        msg.style.background = type === 'success' ? '#d1fae5' : '#fee2e2';
        msg.style.color      = type === 'success' ? '#065f46' : '#991b1b';
    }
});
