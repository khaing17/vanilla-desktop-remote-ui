const closeBtn = document.querySelector("#close-menu");
const openBtn = document.querySelector("#open-menu");
const menu = document.querySelector("#menu");

openBtn.addEventListener("click", () => {
  menu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  menu.style.left = "-100%";
});
