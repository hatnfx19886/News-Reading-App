"use strict";
// Local storage
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key) {
  return localStorage.getItem(key);
}
