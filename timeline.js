  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // triggers when 10% is visible
  });

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });