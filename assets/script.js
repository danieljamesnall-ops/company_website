const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});
