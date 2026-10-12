const contactToggle = document.querySelector("#contactToggle");
const contactDetails = document.querySelector("#contactDetails");

contactToggle.addEventListener("click", () => {
  const expanded = contactToggle.getAttribute("aria-expanded") === "true";
  contactToggle.setAttribute("aria-expanded", String(!expanded));
  contactDetails.classList.toggle("is-collapsed", expanded);
  contactToggle.querySelector("span:first-child").textContent = expanded ? "Show Contacts" : "Hide Contacts";
});

const filter = document.querySelector("#projectFilter");
const projects = [...document.querySelectorAll(".project-card")];

filter.addEventListener("change", () => {
  const selected = filter.value;
  projects.forEach((project) => {
    project.hidden = selected !== "all" && project.dataset.category !== selected;
  });
});

const navLinks = [...document.querySelectorAll(".nav-link")];
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();
  const email = form.get("email").trim();
  const subject = form.get("subject").trim();
  const message = form.get("message").trim();

  // Neuphora Labs contact address.
  const recipient = "neuphoralabs@gmail.com";
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector("#formNote").textContent = "Opening your email app with the message filled in. Update the recipient in script.js if you prefer another contact email.";
  window.location.href = mailto;
});
