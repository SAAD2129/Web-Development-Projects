// All selectors are here & all variable intializations
let closeBtn = document.querySelector(".closeBtn");
let navigation = document.querySelector(".navigation");
let menuBtn = document.querySelector("#menuBtn");
let Email = document.getElementById("email");
let Name = document.getElementById("name");
let PhoneNum = document.getElementById("phone");
let Description = document.getElementById("desc");
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
let BarmenuBtn = document.querySelector(".BarmenuBtn");
let dt = new Date().getHours();
let barmode = document.querySelector(".barmode");
let text = "Sajid";
let index = 0;
let myName = document.querySelector(".myName");
let tx2 = "Web Developer";
let Porfession = document.querySelector(".profession");

let imgsNavs = navigation.querySelectorAll("img");

// Menu // (max-width: 800px)
menuBtn.onclick = () => {

	if (navigation.style.left == "0%") {
		navigation.style.left = "-100%";
		menuBtn.style.left = "1.5rem";
		menuBtn.src = "icons/menu.svg"
		if ("theme" == "dark") {
			menuBtn.classList.add("inverted")
		}
	} else {
		menuBtn.style.left = "90%";
		navigation.style.left = "0%";
		menuBtn.src = "icons/close.svg"
		if ("theme" == "dark") {
			menuBtn.classList.add("inverted")
		}
	}
};
window.onscroll = () => {
	navigation.style.left = "-100%";
	menuBtn.style.left = "1.5rem";
	menuBtn.src = "icons/menu.svg"
};

// Dark Mode Settings
if (localStorage.getItem("theme") == "dark") {
	document.body.classList.remove("DarkMode");
	menuBtn.classList.remove("inverted");
} else if (localStorage.getItem("theme") == "light") {
	document.body.classList.add("DarkMode");
	menuBtn.classList.add("inverted");
} else {
	localStorage.setItem("theme", "light");
	menuBtn.classList.remove("inverted");
}
// For Width more than 400
modeBtn.addEventListener("click", () => {
	document.body.classList.toggle("DarkMode");
	// menuBtn.classList.toggle("inverted");
	// BarmenuBtn.classList.toggle("inverted");
	if (localStorage.getItem("theme") == "dark") {
		localStorage.setItem("theme", "light");
		menuBtn.classList.add("inverted");
	} else {
		localStorage.setItem("theme", "dark");
		menuBtn.classList.remove("inverted");
	}
});
// Dark Mode Settings End Here;
// For Form inputs
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
phone.addEventListener("change", (e) => {
	if (e.target.value != "") {
		num = true;
	}
});
sendBtn.addEventListener("click", () => {
	if (em && num && na) {
		modal.style.display = "flex";
	}
	NameContainer.innerText = n;
	setTimeout(() => {
		modal.style.display = "none";
	}, 3000);
});

// Contact Form Data To Gmail
// & it's Reseting
sendBtn.onclick = () => {
	setTimeout(() => {
		Email.value = "";
		Name.value = "";
		PhoneNum.value = "";
		Description.value = "";
	}, 300);

};

Display = () => {
	newTex = text.slice(0, index);
	// console.log(newTex);
	myName.innerHTML = newTex;
	index++;
	if (index > text.length) {
		index = 0;
	}
};



setTimeout(Display, 400);
setTimeout(Display, 800);
setTimeout(Display, 1200);
setTimeout(Display, 1600);
setTimeout(Display, 2000);
setTimeout(Display, 2400);