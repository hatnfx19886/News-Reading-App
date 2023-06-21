"use strict";
"use strict";
// Choose Element
const newContainer = document.getElementById("news-container");
const preBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const pageNumber = document.getElementById("page-num");
const queryInput = document.getElementById("input-query");
const searchBtn = document.getElementById("btn-submit");
const pageChange = document.getElementById("nav-page-num");

// Load setting from local stogare
let userSetting = JSON.parse(getFromStorage("setting"));

// Default setting
let page = 1;
let pageEnd;
if (!userSetting) {
  userSetting = {
    newPerPage: 5,
  };
}

// Async Function
const newApi = async function (query, page) {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&pageSize=${userSetting.newPerPage}&page=${page}&apiKey=d06df1e87df446348a86628d619fbdcc`
  );
  const data = await res.json();
  pageEnd = data.totalResults / userSetting.newPerPage;
  if (pageEnd <= 1) {
    nextBtn.classList.add("hide");
  }
  renderNewData(data);
};

// Click Search
let query;
searchBtn.addEventListener("click", function () {
  query = queryInput.value;
  if (!query) {
    alert("Please input for your keywords");
  } else {
    newApi(query, page);
    pageChange.classList.remove("hide");
  }
});

// Click Previous
preBtn.addEventListener("click", function () {
  page--;
  pageNumber.textContent = `${page}`;
  if (page === 1) {
    preBtn.classList.add("hide");
  }
  nextBtn.classList.remove("hide");
  newApi(query, page);
});

// Click Next
nextBtn.addEventListener("click", function () {
  page++;
  pageNumber.textContent = `${page}`;
  if (page >= pageEnd) {
    nextBtn.classList.add("hide");
  }
  preBtn.classList.remove("hide");
  newApi(query, page);
});
