"use strict";
// Class User
const User = class {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
};

// Change JS Object to Class
const getUserCl = (oj) =>
  new User(oj.firstName, oj.lastName, oj.username, oj.password);

// Function Show New data
const renderNewData = function (oj) {
  newContainer.innerHTML = "";
  for (let i = 0; i < oj.totalResults; i++) {
    const html = `<div class="flex">
<div>
  <img
    src=${
      oj.articles[i].urlToImage
        ? oj.articles[i].urlToImage
        : "../default_img.jpg"
    }
    alt="${oj.articles[i].title}"
  />
</div>
<div>
  <h5>
    ${oj.articles[i].title}
  </h5>
  <p>
    ${
      oj.articles[i].description ? oj.articles[i].description : "No Description"
    }
  </p>
  <a href=${oj.articles[0].url} target="_blank">
  <button type="button" class="btn btn-primary" id="btn-view">
    View
  </button></a>
</div>
</div>`;
    newContainer.insertAdjacentHTML("beforeend", html);
  }
};
