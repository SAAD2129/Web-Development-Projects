let Button = document.querySelector(".circle");
Button.addEventListener("click", () => {
	console.log("object");
	if (Button.style.left == "2rem") {
		Button.style.left = "0.3rem";
		Button.style.background = "rgb(191, 157, 226)";
	} else {
		Button.style.left = "2rem";
		Button.style.background = "rgb(176, 117, 234)";
	}
});
