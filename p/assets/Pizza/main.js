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
setInterval(Carousal, 4000);
let prev = document.getElementById("prev");
let next = document.getElementById("next");
prev.onclick = () => {
	index -= 1;
	if (index < 0) {
		index = carimgslength - 1;
	} else if (index > carimgslength) {
		index -= 1;
	}
	Carousal(index);
};
next.onclick = () => {
	if (index < carimgslength - 1) index += 1;
	else index = 0;
	Carousal(index);
};

let hide = document.querySelector(".hide");
let headings = Array.from(document.querySelectorAll(".heading"));

toggle = () => {
	hide.classList.toggle("show");
	headings.forEach((heading) => {
		heading.classList.toggle("bg-orange");
	});
};
let MenuBtn = document.getElementById("MenuBtn");
let navBar = document.querySelector(".navigation");
MenuBtn.addEventListener('click', () => {
	if (navBar.style.left == '0%') {
		navBar.style.left = '-100%';
		MenuBtn.classList.remove("uil-times");
		MenuBtn.classList.add("uil-bars");
		
	} else {
		navBar.style.left = '0%';
		MenuBtn.src = "../icons/close-fill.svg";
		MenuBtn.classList.remove("uil-bars");
		MenuBtn.classList.add("uil-times");
	}
})