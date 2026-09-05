const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
  glow.style.opacity = '1';
});
window.addEventListener('mouseleave', () => glow.style.opacity = '0');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:650, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

document.querySelectorAll('.card, .project, .timeline-item, .contact-box').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
