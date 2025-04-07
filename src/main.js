document.addEventListener("DOMContentLoaded", function () {
  const animElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      } else {
        entry.target.classList.remove("animated"); // RESET after scroll out
      }
    });
  }, { threshold: 0.2 });

  animElements.forEach(el => observer.observe(el));
});
const glowButtons = document.querySelectorAll('.glow-hover');

glowButtons.forEach(button => {
  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--x', `${x}%`);
    button.style.setProperty('--y', `${y}%`);
  });
});
