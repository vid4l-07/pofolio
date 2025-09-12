const animados = document.querySelectorAll(".in-anim");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

animados.forEach(el => observer.observe(el));
