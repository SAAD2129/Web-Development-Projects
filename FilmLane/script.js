let burg = document.querySelector(".burg");
let seIcon = document.querySelector(".seIcon");
let seInput = document.querySelector(".seInput");
let navigation = document.getElementById("navigation");
burg.onclick = () => {
	if (navigation.style.top == "-20rem") {
		navigation.style.top = "0";
	} else {
		navigation.style.top = "-20rem";
	}
};
seIcon.onclick = () => {
  // console.log("h");
	// if (seInput.style.width == "0" && seInput.style.display == "none") {
	// 	seInput.style.width = "100%";
	// 	seInput.style.display = "inline";
	// } else {
	// 	seInput.style.width = "0";
	// 	seInput.style.display = "none";
	// }
  seInput.style.width == "100%";
  
};
