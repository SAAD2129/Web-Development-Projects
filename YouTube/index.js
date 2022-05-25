let menu = document.querySelector(".menu");
let navBar = document.querySelector(".navBar");
let container = document.querySelector(".container");
let body = document.getElementById("body");
menu.onclick = () => {
  navBar.classList.toggle("hidea");
  container.classList.toggle("bigcontainer");
};
