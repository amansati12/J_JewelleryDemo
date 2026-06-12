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

  const heroVideos = Array.from(document.querySelectorAll(".hero-video"));
  const heroDots = Array.from(document.querySelectorAll("[data-hero-slide]"));
  let activeHeroVideo = 0;
  let heroTimer;

  function showHeroVideo(index) {
    if (!heroVideos.length) return;
    activeHeroVideo = (index + heroVideos.length) % heroVideos.length;

    heroVideos.forEach((video, videoIndex) => {
      const isActive = videoIndex === activeHeroVideo;
      video.classList.toggle("active", isActive);
      if (isActive) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    heroDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeHeroVideo);
    });
  }

  function startHeroSlider() {
    if (heroVideos.length < 2) return;
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroVideo(activeHeroVideo + 1), 6500);
  }

  heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showHeroVideo(Number(dot.dataset.heroSlide));
      startHeroSlider();
    });
  });

  showHeroVideo(0);
  startHeroSlider();

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
