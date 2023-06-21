"use strict";
// Choose elements
const firstNameInput = document.getElementById("input-firstname");
const lastNameInput = document.getElementById("input-lastname");
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const confirmPasswordInput = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");

// Load data from LocalStorage
let userArr = JSON.parse(getFromStorage("user"));
if (!userArr) {
  userArr = [];
} else userArr = userArr.map((oj) => getUserCl(oj));

// Click Register
registerBtn.addEventListener("click", function () {
  let validate = true;
  const firstName = firstNameInput.value,
    lastName = lastNameInput.value,
    username = usernameInput.value,
    password = passwordInput.value,
    confirmPassword = confirmPasswordInput.value;
  // Check validate
  if (!firstName) {
    validate = false;
    alert("Please input for your First Name");
  }
  if (!lastName) {
    validate = false;
    alert("Please input for your Last Name");
  }
  // Check username
  if (!username) {
    validate = false;
    alert("Please input for your Username");
  }
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === username) {
      validate = false;
      alert("Your Username have been registed. Please input another");
    }
  }
  // Check password
  if (!password) {
    validate = false;
    alert("Please input for your Password");
  }
  if (password.length <= 8 && password.length > 0) {
    validate = false;
    alert("Your password must be more than 8 characters");
  }
  if (!confirmPassword) {
    validate = false;
    alert("Please input for Confirm Password");
  }
  if (password !== confirmPassword) {
    validate = false;
    alert("Your Password and Confirm Password must be the same");
  }
  // Validated
  if (validate) {
    userArr.push(new User(firstName, lastName, username, password));
    saveToStorage("user", JSON.stringify(userArr));
    window.location.href = "../pages/login.html";
  }
});
