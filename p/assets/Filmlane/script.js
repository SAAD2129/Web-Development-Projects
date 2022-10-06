let burg = document.querySelector(".burg");
let seIcon = document.querySelector(".seIcon");
let seInput = document.querySelector(".seInput");
let navigation = document.getElementById("navigation");
burg.onclick = () => {
	if (navigation.style.top == "-20rem") {
		navigation.style.top = "0";
		burg.style.transform = `rotate(270deg)`;
	} else {
		navigation.style.top = "-20rem";
		burg.style.transform = `rotate(0deg)`;
	}
};
window.onscroll = () => {
	navigation.style.top = "-20rem";
};
seIcon.onclick = () => {
	// seInput.style.width = "100%";
	// seInput.style.backgroundColor = "#fff";
	console.log("h");
	if (seInput.style.width == "100%") {
		seInput.style.width = "0";
	} else {
		seInput.style.width = "100%";
	}
};
