console.log("hey");
let hiders = Array.from(document.querySelectorAll(".hider"));
let items = document.querySelectorAll(".item");
const noneAll = () => {
	Array.from(items).forEach((item) => {
		item.style.display = "none";
	});
};

hiders.forEach((hider, index) => {
	hider.addEventListener("click", (e) => {
		
		if (items[index].style.display == "none") {
			noneAll();
			items[index].style.display = "block";
		} else {
			items[index].style.display = "none";
		}
	});
});
// console.log(hiders);
