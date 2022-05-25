let heads = document.querySelectorAll(".head");
let pHiders = document.querySelectorAll(".p-hider");

heads.forEach((head) => {
  head.addEventListener("click", () => {
    heads.forEach((head) => {
      head.classList.toggle("hide");
    });
    head.nextElementSibling.classList.toggle("hide");
  });
});
