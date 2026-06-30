// =========================================
// AFCademIA — Landing Webinar IA Scripts
// =========================================

const N8N_WEBHOOK = '{{URL_N8N_WEBHOOK}}';
const GOOGLE_FORM_URL = 'https://forms.gle/Vhd3QbMJYtWTCBhA6';

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile menu ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

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

    // --- Intersection Observer for fade-in animations ---
    const fadeElements = document.querySelectorAll(
        '.problem-card, .resource-card, .step, .result-card, .testimonial-card, .faq-item, .contact-info, .contact-form'
    );

    fadeElements.forEach(el => el.classList.add('fade-in'));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- Hero card bar animation ---
    const barFill = document.querySelector('.hero-card-bar-fill');
    if (barFill) {
        setTimeout(() => barFill.classList.add('animated'), 500);
    }

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
            const target = parseInt(counter.dataset.target);
            const duration = 1800;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);
                counter.textContent = current.toLocaleString('es-ES');
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    // --- Form handling (both forms) ---
    document.querySelectorAll('.lead-form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('[type="submit"]');
            const nombre = form.querySelector('[name="nombre"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const privacidad = form.querySelector('[name="privacidad"]');

            if (!nombre || !email || (privacidad && !privacidad.checked)) return;

            btn.textContent = 'Enviando...';
            btn.disabled = true;

            try {
                await fetch(N8N_WEBHOOK, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, email, fuente: 'descarga-lead-magnet-webinar-julio-2026' })
                });
            } catch (_) {
                // Si falla la red igualmente redirigimos
            }

            // Abrir Google Form en nueva pestaña para registro adicional
            window.open(GOOGLE_FORM_URL, '_blank', 'noopener');
            window.location.href = 'gracias.html';
        });
    });
});
