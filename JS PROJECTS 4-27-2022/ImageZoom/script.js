let img = document.querySelector(".img");
let btn = document.getElementById("btn");

img.addEventListener("mousemove", (e) => {
	// console.log("hey");
	let x = e.clientX - e.target.offsetLeft;
	let y = e.clientY - e.target.offsetTop;
	console.log(x);
	console.log(y);

	img.style.transformOrigin = `${x}px ${y}px`;
	img.style.transform = "scale(2)";
});
img.addEventListener("mouseleave", (e) => {
	img.style.transform = "scale(1)";
});
