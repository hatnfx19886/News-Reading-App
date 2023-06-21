"use strict";
// Choose Elements
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

// Load data from LocalStorage
let userArr = JSON.parse(getFromStorage("user"));
if (!userArr) {
  userArr = [];
} else {
  userArr = userArr.map((oj) => getUserCl(oj));
}

// Check login
let login = false;
let currentUser;
// Click Login
loginBtn.addEventListener("click", function () {
  const username = usernameInput.value,
    password = passwordInput.value;
  if (!username) {
    alert("Please input for your Username");
  }
  if (!password) {
    alert("Please input for your Password");
  }
  for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].username === username && userArr[i].password === password) {
      login = true;
      currentUser = userArr[i];
    }
  }
  if (username && password && !login) {
    alert("Wrong Username or Password. Please try again!");
  }
  if (login) {
    saveToStorage("current", JSON.stringify(currentUser));
    window.location.href = "../index.html";
  }
});
