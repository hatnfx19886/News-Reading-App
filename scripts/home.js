"use strict";
// Choose elements
const loginEl = document.getElementById("login-modal");
const logoutEl = document.getElementById("main-content");
const welcomeEl = document.getElementById("welcome-message");
const logoutBtn = document.getElementById("btn-logout");

// Check login
let currentUser = JSON.parse(getFromStorage("current"));
// If login = false
if (!currentUser) {
  logoutEl.classList.add("hide");
  loginEl.classList.remove("hide");
  // Login = true
} else {
  currentUser = getUserCl(currentUser);
  loginEl.classList.add("hide");
  logoutEl.classList.remove("hide");
  welcomeEl.textContent = `Welcome ${currentUser.firstName}`;
}

// Logout
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("current");
  logoutEl.classList.add("hide");
  loginEl.classList.remove("hide");
});
