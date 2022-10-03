const menuToggle = document.querySelector(".header-toggle");
const menuClose = document.querySelector(".header-close");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";

menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});

menuClose.addEventListener("click", function () {
  menuHeader.classList.remove(expandClass);
});

window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});
