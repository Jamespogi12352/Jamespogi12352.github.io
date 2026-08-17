// Smooth navigation and a small active-link effect.
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));
