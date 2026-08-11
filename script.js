// ============ ProTeam Logistics — interactions ============

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Driver application form — opens a pre-filled email draft.
const RECRUITING_EMAIL = "recruiting@proteamlogisticsllc.com";

document.getElementById("applyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent(
    `Driver Application — ${data.get("firstName")} ${data.get("lastName")}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `CDL Experience: ${data.get("experience")}`,
      "",
      `Additional information:`,
      data.get("message") || "-",
    ].join("\n")
  );
  window.location.href = `mailto:${RECRUITING_EMAIL}?subject=${subject}&body=${body}`;
  document.getElementById("formSuccess").hidden = false;
});
