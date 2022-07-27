// All selectors are here & all variable intializations
let closeBtn = document.querySelector(".closeBtn");
let navigation = document.querySelector(".navigation");
let menuBtn = document.querySelector(".menuBtn");
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
let navItems = Array.from(document.querySelectorAll(".nav-item"));
let dt = new Date().getHours();
let barmode = document.querySelector(".barmode");
let text = "SAJID";
let index = 0;
let myName = document.querySelector(".myName");
// Menu
menuBtn.onclick = () => {
	// let literal = document.querySelector(".literal");
	// document.body.classList.add("literal");
	if (navigation.style.width == "16.5rem") {
		navigation.style.width = "6rem";
		document.body.style.paddingLeft = "6rem";
		menuBtn.style.left = "6.5rem";
		menuBtn.src = "../icons/menu-4-fill.svg";
		navItems.forEach((navItem) => {
			navItem.style.display = "none";
		});
		document.querySelector(".Profile").style.display = "none";
	} else {
		navItems.forEach((navItem) => {
			navItem.style.display = "flex";
		});
		menuBtn.src = "../icons/close-fill.svg";
		menuBtn.style.left = "90%";
		document.querySelector(".Profile").style.display = "block";
		navigation.style.width = "16.5rem";
	}
};
window.onscroll = () => {
	if (navigation.style.width == "16.5rem") {
		navigation.style.width = "6rem";
		document.body.style.paddingLeft = "6rem";
		menuBtn.style.left = "6.5rem";
		menuBtn.src = "../icons/menu-4-fill.svg";
		navItems.forEach((navItem) => {
			navItem.style.display = "none";
		});
		document.querySelector(".Profile").style.display = "none";
		BarmenuBtn.src = "./icons/menu-4-fill.svg";
		navigation.style.bottom = "-100%";
	}
};

// For Width 400 & less than 400

BarmenuBtn.onclick = () => {
	// navigation.classList.toggle('mob')
	if (navigation.style.bottom == "5.5%") {
		BarmenuBtn.src = "./icons/menu-4-fill.svg";
		navigation.style.bottom = "-100%";
		navigation.style.width = "101vw";
		navItems.forEach((navItem) => {
			navItem.style.display = "none";
		});
	} else {
		navigation.style.bottom = "5.5%";
		navigation.style.width = "101vw";
		BarmenuBtn.src = "./icons/close-fill.svg";
		navItems.forEach((navItem) => {
			navItem.style.display = "block";
		});
	}
};
// Dark Mode Settings

barmode.addEventListener("click", () => {
	document.body.classList.toggle("DarkMode");
	menuBtn.classList.toggle("inverted");

	if (localStorage.getItem("theme") == "dark") {
		localStorage.setItem("theme", "light");
	} else {
		localStorage.setItem("theme", "dark");
	}
});

if (localStorage.getItem("theme") == "dark") {
	document.body.classList.remove("DarkMode");
	BarmenuBtn.classList.remove("inverted");
	menuBtn.classList.remove("inverted");
} else if (localStorage.getItem("theme") == "light") {
	document.body.classList.add("DarkMode");
	BarmenuBtn.classList.add("inverted");
	menuBtn.classList.add("inverted");
} else {
	localStorage.setItem("theme", "light");
	BarmenuBtn.classList.remove("inverted");
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
});
setTimeout(() => {
	modal.style.display = "none";
}, 2000);
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
	console.log(newTex);
	myName.innerHTML = newTex;
	index++;
	if (index > text.length) {
		index = 0;
	}
};

setTimeout(Display, 200);
setTimeout(Display, 600);
setTimeout(Display,800);
setTimeout(Display, 1000);
setTimeout(Display, 1200);
setTimeout(Display, 1400);

