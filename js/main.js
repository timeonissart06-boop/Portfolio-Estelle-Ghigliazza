/* ============================================================
   ESTELLE GHIGLIAZZA — Portfolio
   js/main.js
   ============================================================ */

/* ─── GSAP ─────────────────────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger);

/* ─── NAV SCROLL ────────────────────────────────────────────── */
const nav = document.querySelector('.site-nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── ACTIVE NAV LINK ───────────────────────────────────────── */
(function markActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav__link, .nav-overlay__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const resolved = new URL(href, window.location.href).pathname;
    if (resolved === path || (path.endsWith('/') && resolved === '/index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ─── MOBILE MENU ───────────────────────────────────────────── */
const toggle   = document.querySelector('.site-nav__toggle');
const overlay  = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-overlay__close');

function openMenu() {
  if (!overlay || !toggle) return;
  overlay.classList.add('open');
  toggle.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  if (!overlay || !toggle) return;
  overlay.classList.remove('open');
  toggle.classList.remove('open');
  document.body.style.overflow = '';
}

if (toggle) toggle.addEventListener('click', () => {
  overlay.classList.contains('open') ? closeMenu() : openMenu();
});
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) {
  overlay.querySelectorAll('.nav-overlay__link').forEach(l => {
    l.addEventListener('click', closeMenu);
  });
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ─── SCROLL REVEALS ────────────────────────────────────────── */
function initReveal(selector, options = {}) {
  gsap.utils.toArray(selector).forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: options.y ?? 36 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 1,
        ease: 'power3.out',
        delay: (options.stagger ?? 0) * i,
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 88%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
}

initReveal('.reveal');
initReveal('.reveal-up', { y: 22, duration: 0.8 });

/* Staggered children */
document.querySelectorAll('.stagger-group').forEach(group => {
  const children = group.querySelectorAll(':scope > *');
  children.forEach((child, i) => {
    gsap.fromTo(child,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: group,
          start: 'top 86%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
});

/* ─── HERO NAME REVEAL ──────────────────────────────────────── */
const heroName = document.querySelector('.hero__name');
if (heroName) {
  gsap.fromTo(heroName,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  );
  const heroEls = [
    document.querySelector('.hero__script'),
    document.querySelector('.hero__tagline'),
    document.querySelector('.hero__bio'),
    document.querySelector('.hero__cta'),
  ].filter(Boolean);
  gsap.fromTo(heroEls,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.5 }
  );
}

/* ─── PROJECT HERO PARALLAX ─────────────────────────────────── */
const projectHeroImg = document.querySelector('.project-hero__img');
if (projectHeroImg) {
  gsap.to(projectHeroImg, {
    y: '18%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.project-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

/* ─── HOME HERO PARALLAX ────────────────────────────────────── */
const heroRightImg = document.querySelector('.hero__right-img');
if (heroRightImg) {
  gsap.to(heroRightImg, {
    y: '12%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

/* ─── GALLERY ITEMS STAGGER ─────────────────────────────────── */
document.querySelectorAll('.gallery').forEach(gallery => {
  const items = gallery.querySelectorAll('.gallery__item');
  gsap.fromTo(items,
    { opacity: 0, y: 24 },
    {
      opacity: 1, y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: gallery,
        start: 'top 88%',
        toggleActions: 'play none none none',
      }
    }
  );
});

/* ─── PROJECT CARDS STAGGER ─────────────────────────────────── */
document.querySelectorAll('.featured-grid, .projects-index-grid').forEach(grid => {
  const cards = grid.querySelectorAll('.project-card');
  gsap.fromTo(cards,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: grid,
        start: 'top 88%',
        toggleActions: 'play none none none',
      }
    }
  );
});

/* ─── SKETCH GRID ───────────────────────────────────────────── */
const sketchGrid = document.querySelector('.sketch-grid');
if (sketchGrid) {
  gsap.fromTo(sketchGrid.querySelectorAll('.sketch-item'),
    { opacity: 0, y: 32 },
    {
      opacity: 1, y: 0,
      duration: 0.9, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: sketchGrid, start: 'top 88%', toggleActions: 'play none none none' }
    }
  );
}

/* ─── SECTION TITLE SLIDE ───────────────────────────────────── */
gsap.utils.toArray('.section__title').forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, x: -24 },
    {
      opacity: 1, x: 0,
      duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' }
    }
  );
});

/* ─── META BAR ──────────────────────────────────────────────── */
const metaBar = document.querySelector('.project-meta');
if (metaBar) {
  gsap.fromTo(metaBar.querySelectorAll('.project-meta__item'),
    { opacity: 0, y: 16 },
    {
      opacity: 1, y: 0,
      duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.2,
      scrollTrigger: { trigger: metaBar, start: 'top 90%', toggleActions: 'play none none none' }
    }
  );
}

/* ─── IMAGE ERROR HANDLING ──────────────────────────────────── */
const PLACEHOLDER = 'data:image/svg+xml;charset=utf8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%221%22 height%3D%221%22%2F%3E';
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.background = 'var(--linen)';
    this.src = PLACEHOLDER;
    this.removeEventListener('error', arguments.callee);
  });
});

/* ─── CONTACT FORM ──────────────────────────────────────────── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.btn');
    if (!btn) return;
    const name    = this.querySelector('[name="name"]')?.value || '';
    const email   = this.querySelector('[name="email"]')?.value || '';
    const subject = this.querySelector('[name="subject"]')?.value || 'Portfolio — Prise de contact';
    const message = this.querySelector('[name="message"]')?.value || '';
    const mailto = `mailto:estelle.ghigliazza@ynov.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De : ${name}\nEmail : ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  });
}

/* ─── SMOOTH HASH SCROLL ────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
