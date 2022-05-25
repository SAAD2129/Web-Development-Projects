let Close = document.getElementById("Close");
let Box = document.querySelector(".Box-container");
let Modal = document.querySelector(".Modal");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  Modal.style.display = "block";
  btn.style.display = "none";
  Box.style.background = "rgba(0, 0, 0, 0.5)";
  Modal.style.transition = ":all 0.5s ease;";
});
Close.addEventListener("click", () => {
  Modal.style.display = "none";
  Modal.style.transition = ":all 0.5s ease;";
  btn.style.display = "block";
  Box.style.background = "rgb(123, 151, 235)";
});
