"use strict";
// Choose Elements
const newPerPageInput = document.getElementById("input-page-size");
const categoryInput = document.getElementById("input-category");
const saveBtn = document.getElementById("btn-submit");

// Default setting
let userSetting = JSON.parse(getFromStorage("setting"));
if (!userSetting) {
  userSetting = {
    newPerPage: 5,
    category: "General",
  };
}

// Click Save
saveBtn.addEventListener("click", function () {
  const newPerPage = newPerPageInput.value;
  const category = categoryInput.value;
  if (!newPerPage) {
    alert("Please input for News Per Page");
  } else {
    // Change Setting
    userSetting.newPerPage = newPerPage;
    userSetting.category = category;
    saveToStorage("setting", JSON.stringify(userSetting));
  }
});

// Update setting value
newPerPageInput.value = userSetting.newPerPage;
categoryInput.value = userSetting.category;
