let carimgs = Array.from(document.querySelectorAll(".carimg"));
index = 0;
let carimgslength = carimgs.length;
let PizzaName = document.querySelector(".PizzaName");
Carousal = () => {
    index++;
    carimgs.forEach((carimg) => {
        if (index > carimgslength - 1 || index < 0) {
            index = 0;
            carimg.style.transform = `translateX(${index * -35}vw)`;
        } else {
            carimg.style.transform = `translateX(${index * -35}vw)`;
        }
        if (index == 1) {
            PizzaName.innerText = "Pizza With Mushrooms";
        } else if (index == 2) {
            PizzaName.innerText = "Mascarpone And Mushrooms";
        } else {
            PizzaName.innerHTML = "Homemade Pizza ";
        }
    });
};
setInterval(Carousal, 3000);

let hides = document.querySelectorAll(".hide");
let headings = Array.from(document.querySelectorAll(".heading"));

hides.forEach((hide) => {
    hide.previousElementSibling.onclick = (e) => {
        let elem = e.target.nextElementSibling;
        if (elem.classList.contains("hide")) {
            e.target.nextElementSibling.classList.replace("hide", "show");
        } else {
            e.target.nextElementSibling.classList.replace("show", "hide");
        }
    };
});

let MenuBtn = document.getElementById("MenuBtn");
let navBar = document.querySelector(".navigation");

MenuBtn.addEventListener("click", () => {
    if (navBar.style.left == "0%") {
        navBar.style.left = "-100%";
        MenuBtn.classList.remove("uil-times");
        MenuBtn.classList.add("uil-bars");
    } else {
        navBar.style.left = "0%";
        MenuBtn.src = "../icons/close-fill.svg";
        MenuBtn.classList.remove("uil-bars");
        MenuBtn.classList.add("uil-times");
    }
});
