/*   script for preloader    */
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
/*  script to view stories   */
function story1() {
  let story = document.querySelector(".story-active");
  story.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  let story = document.querySelector(".story-active");
  let btn = document.querySelector(".user1");
  let targetElement = event.target;
  if (story.contains(targetElement) && !btn.contains(targetElement)) {
    story.classList.remove("active");
  }
});
/*    script for post like button   */
var imageState = 0;
function like() {
  var image = document.getElementById("like");
  var oldImagePath = "images/heart.png";
  var newImagePath = "images/like.png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
var imageState = 0;
function like1() {
  var image = document.getElementById("like1");
  var oldImagePath = "images/heart.png";
  var newImagePath = "images/like.png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
var imageState = 0;
function like2() {
  var image = document.getElementById("like2");
  var oldImagePath = "images/heart.png";
  var newImagePath = "images/like.png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
/*   script for post bookmark button   */
function bookmark() {
  var image = document.getElementById("bookmark");
  var oldImagePath = "images/bookmark.png";
  var newImagePath = "images/bookmark (1).png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
function bookmark1() {
  var image = document.getElementById("bookmark1");
  var oldImagePath = "images/bookmark.png";
  var newImagePath = "images/bookmark (1).png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
function bookmark2() {
  var image = document.getElementById("bookmark2");
  var oldImagePath = "images/bookmark.png";
  var newImagePath = "images/bookmark (1).png";

  if (imageState === 0) {
    image.src = newImagePath;
    image.alt = "New Image";
    imageState = 1;
  } else {
    image.src = oldImagePath;
    image.alt = "Initial Image";
    imageState = 0;
  }
}
/*  script for post menu button   */
function menu() {
  let menu = document.querySelector(".menu-active");
  menu.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu-active");
  let btn = document.querySelector(".menu-btn");
  let targetElement = event.target;
  if (!menu.contains(targetElement) && !btn.contains(targetElement)) {
    menu.classList.remove("active");
  }
});
function menu1() {
  let menu = document.querySelector(".menu-active1");
  menu.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu-active1");
  let btn = document.querySelector(".menu-btn1");
  let targetElement = event.target;
  if (!menu.contains(targetElement) && !btn.contains(targetElement)) {
    menu.classList.remove("active");
  }
});
function menu2() {
  let menu = document.querySelector(".menu-active2");
  menu.classList.toggle("active");
}
document.addEventListener("click", function (event) {
  let menu = document.querySelector(".menu-active2");
  let btn = document.querySelector(".menu-btn2");
  let targetElement = event.target;
  if (!menu.contains(targetElement) && !btn.contains(targetElement)) {
    menu.classList.remove("active");
  }
});
/*   script for post follow button   */
function follow() {
  let button = document.querySelector(".follow-btn");
  let currentWord = button.textContent;
  if (currentWord === "Follow") {
    button.textContent = "Following";
  } else {
    button.textContent = "Follow";
  }
}
function follow1() {
  let button = document.querySelector(".follow-btn1");
  let currentWord = button.textContent;
  if (currentWord === "Follow") {
    button.textContent = "Following";
  } else {
    button.textContent = "Follow";
  }
}
function follow2() {
  let button = document.querySelector(".follow-btn2");
  let currentWord = button.textContent;
  if (currentWord === "Follow") {
    button.textContent = "Following";
  } else {
    button.textContent = "Follow";
  }
}
