const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((node, index) => {
  node.style.transitionDelay = `${index * 60}ms`;
  observer.observe(node);
});

const note = document.getElementById("form-note");
const params = new URLSearchParams(window.location.search);
if (params.get("submitted") === "true" && note) {
  note.textContent = "Thanks for joining Team Chyna. We will contact you soon.";
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
