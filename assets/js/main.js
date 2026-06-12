(function () {
  "use strict";

  const nav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");

  function updateChrome() {
    const scrolled = window.scrollY > 40;
    if (nav) nav.classList.toggle("nav-scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  }

  updateChrome();
  window.addEventListener("scroll", updateChrome, { passive: true });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  revealItems.forEach((item) => observer.observe(item));

  const filterButtons = document.querySelectorAll("[data-filter]");
  const galleryItems = document.querySelectorAll(".gallery-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      galleryItems.forEach((item) => {
        const visible = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("d-none", !visible);
      });
    });
  });
})();
