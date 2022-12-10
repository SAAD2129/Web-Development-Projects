let Nav = document.querySelector(".navigation");
let MenuBtn = document.getElementById("MenuBtn");
MenuBtn.addEventListener("click", () => {
  if (Nav.style.left == "0px") {
    Nav.style.left = "-100%";
    MenuBtn.src = "../icons/align-right.svg";//../icons/align-right.svg
  } else {
    Nav.style.left = "0px";
    MenuBtn.src = "../icons/align-left.svg";
  }
});
window.onscroll = () => {
  Nav.style.left = "-100%";
  MenuBtn.src = "../icons/align-right.svg";
};
