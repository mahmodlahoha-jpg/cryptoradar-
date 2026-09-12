// Highlight the privacy-policy section currently visible on screen.
const sections = document.querySelectorAll(".policy-section");
const links = document.querySelectorAll(".contents-card a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  {
    rootMargin: "-20% 0px -65% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));
