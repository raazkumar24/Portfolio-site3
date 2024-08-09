document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-animation, .slide-in-right,  .slide-in-left,   .slide-in-up, .slide-in-down ');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(element => observer.observe(element));
});
