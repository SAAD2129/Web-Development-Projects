let closeBtn = document.querySelector(".closeBtn");
let navigation = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menuBtn");
let cars = Array.from(document.querySelectorAll(".car"));
let Caro = document.querySelector(".Caro");

// closeBtn.onclick = () => {
// 	menuBtn.style.display = "block";
// 	// navigation.style.height = "0";
// };
menuBtn.onclick = () => {
	if (navigation.style.bottom == "0%") {
		menuBtn.src = "../icons/menu-4-fill.svg";
		navigation.style.bottom = "-100%";
	} else {
		navigation.style.bottom = "0%";
		menuBtn.src = "../icons/close-fill.svg";
	}
	// menuBtn.style.display = "none";
	// navigation.style.height = "0";
};
let index = 0;
let carsLength = cars.length;
setInterval(() => {
	index++;
	cars.forEach((cars) => {
		if (index > carsLength - 1) {
			index = 0;
			cars.style.transform = `translateX(${index * -100}%)`;
		} else {
			cars.style.transform = `translateX(${index * -100}%)`;
		}
	});
}, 1500);
let n;
let sendBtn = document.querySelector(".send");
let modal = document.querySelector(".modal");
let NameContainer = document.querySelector(".name");
let NameMain = document.querySelector("#name");
let number = document.querySelector("#number");
let email = document.querySelector("#email");
let modeBtn = document.querySelector(".modeBtn");
let inps = Array.from(document.querySelectorAll(".inp"));
let em, na, num;
NameMain.addEventListener("change", (e) => {
	n = e.target.value;
	if (e.target.value != "") {
		na = true;
	}
});
email.addEventListener("change", (e) => {
	if (e.target.value != "") {
		em = true;
	}
});
number.addEventListener("change", (e) => {
	if (e.target.value != "") {
		num = true;
	}
});
sendBtn.addEventListener("click", () => {
	if (em && num && na) {
		modal.style.display = "flex";
	}
	NameContainer.innerText = n;
});

modeBtn.addEventListener("click", () => {
	if (document.body.style.background == "#fff") {
		// document.body.style.background = "#000";
		document.body.style.background = "#000";
		document.body.style.color = "#fff";
		inps.forEach((inp) => {
			inp.style.background = "#141414";
		});
		// 	//
	} else {
		document.body.style.background = "#fff";
		document.body.style.color = "#000";
		inps.forEach((inp) => {
			inp.style.background = "#efefef";
		});
	}
});
