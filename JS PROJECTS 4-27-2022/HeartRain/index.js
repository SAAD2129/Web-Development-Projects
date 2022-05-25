// let heart = "❤";
let index = 0;
Display = () => {

	let heart = document.createElement("div");
	let rand = Math.round(Math.random() * 100);
	let sign = ["-", "+"];
	let si = sign[Math.round(Math.random() * 1)];
	console.log(si);
	let Axis = ["X", "Y"];
	let axis = Axis[[Math.round(Math.random() * 1)]];
	
	heart.style.transform = `translate${axis}(${si}${rand}vw)`;
	// console.log(`translateX(${si}${rand}vw)`);

	// console.log(heart.style.transform=`translateX(${rand}vw)`);
	document.body.appendChild(heart);
	heart.classList.add("heart");
	heart.innerHTML = "💜";
	console.log(rand);
	// index++;
	// if (index>8) {
	// 	document.body.removeChild(heart);

	// }
};

setInterval(Display, 300);
