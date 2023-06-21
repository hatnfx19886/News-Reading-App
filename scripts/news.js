"use strict";
// Choose Element
const newContainer = document.getElementById("news-container");
const preBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const pageNumber = document.getElementById("page-num");

// Load setting from local stogare
let userSetting = JSON.parse(getFromStorage("setting"));

// Default setting
let page = 1;
let pageEnd;
if (!userSetting) {
  userSetting = {
    newPerPage: 5,
    category: "General",
  };
}

// Async Function
const newApi = async function (page) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${userSetting.category}&pageSize=${userSetting.newPerPage}&page=${page}&apiKey=d06df1e87df446348a86628d619fbdcc`
  );
  const data = await res.json();
  pageEnd = data.totalResults / userSetting.newPerPage;
  if (pageEnd <= 1) {
    nextBtn.classList.add("hide");
  }
  renderNewData(data);
};

// Show new
newApi(page);

// Click Previous
preBtn.addEventListener("click", function () {
  page--;
  pageNumber.textContent = `${page}`;
  if (page === 1) {
    preBtn.classList.add("hide");
  }
  nextBtn.classList.remove("hide");
  newApi(page);
});

// Click Next
nextBtn.addEventListener("click", function () {
  page++;
  pageNumber.textContent = `${page}`;
  if (page >= pageEnd) {
    nextBtn.classList.add("hide");
  }
  preBtn.classList.remove("hide");
  newApi(page);
});
