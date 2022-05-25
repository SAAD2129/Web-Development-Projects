let navigation = document.querySelector(".navigation");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  if (navigation.style.top == "5rem") {
    navigation.style.top = "-25rem";
    menu.src = "../icons/solid/bars.svg";
  } else {
    navigation.style.top = "5rem";
    menu.src = "../icons/solid/xmark.svg";
    menu.style.width = "20px";
  }
});
window.onscroll = () => {
  navigation.style.top = "-25rem";
    menu.src = "../icons/solid/bars.svg";
};
