let text = "Hey Saad how are you how is the life going on what The Next You are going to do";
let index = 0;
Display = () => {
	let word = document.querySelector(".words");

	newTex = text.slice(0, index);
	word.innerHTML = newTex;
	index++;
	if (index > text.length) {
		index = 0;
	}
};

setInterval(Display, 100);
