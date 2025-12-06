// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Simple client-side comments (only active where form/list exist)
const form = document.getElementById("commentForm");
const list = document.getElementById("commentList");

if (form && list) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");

    if (!nameInput || !messageInput) return;

    const name = nameInput.value.trim() || "Guest";
    const message = messageInput.value.trim();

    if (!message) return;

    const item = document.createElement("article");
    item.className = "comment-item";

    item.innerHTML = `
      <div class="comment-item-header">
        <span class="comment-name"></span>
        <span class="comment-meta">Just now</span>
      </div>
      <p></p>
    `;

    item.querySelector(".comment-name").textContent = name;
    item.querySelector("p").textContent = message;

    list.prepend(item);
    form.reset();
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
