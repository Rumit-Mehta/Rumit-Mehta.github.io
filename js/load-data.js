import data from '../config/user-data.js';

document.addEventListener("DOMContentLoaded", () => {
  // Update title
  const titleEl = document.getElementById("title");
  if (titleEl) titleEl.textContent = data.title;

  // Update name
  const nameEl = document.getElementById("name");
  if (nameEl) nameEl.textContent = data.name;

  // Update summary
  const summaryEl = document.getElementById("summary");
  if (summaryEl) summaryEl.textContent = data.summary;

  // Update contact info
  const phoneEl = document.getElementById("phone");
  if (phoneEl) phoneEl.textContent = data.contact.phone;

  const emailEl = document.getElementById("email");
  if (emailEl) emailEl.textContent = data.contact.email;

  const linkedinEl = document.getElementById("linkedin");
  if (linkedinEl) {
    linkedinEl.textContent = data.contact.linkedin;
    linkedinEl.href = data.contact.linkedin;
  }

  // You can continue this pattern for other data like experience, education, etc.
});