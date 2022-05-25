let likes = document.querySelectorAll(".like");
let comment = document.querySelector(".comment");
let post = document.querySelector(".post");
let GeneralMsgs = document.querySelector("#GeneralMsgs");
let PrimaryMsgs = document.querySelector("#PrimaryMsgs");
let commentBox = document.querySelector(".commentBox");
let general = document.querySelector(".generalBtn");
let primary = document.querySelector(".primaryBtn");
let likeCounter = 0;

// let likes = 0;
Array.from(likes).forEach((like, index) => {
	like.addEventListener("click", () => {
		// console.log(like.src);
		if (like.src == "http://127.0.0.1:5500/New/icons/heart-alt.svg") {
			// console.log(like.src == "http://127.0.0.1:5500/New/icons/heart-alt.svg");
			like.src = "icons/solid/heart.svg";
			likeCounter++;
			// likes++;
			console.log(likeCounter);
			// console.log("yese");
		} else {
			like.src = "http://127.0.0.1:5500/New/icons/heart-alt.svg";
			likeCounter--;
			console.log(likeCounter);
		}
	});
});

let val;
comment.addEventListener("click", () => {
	commentBox.style.display = "block";
	commentBox.addEventListener("change", (e) => {
		val = e.target.value;
		let com = document.createElement("p");
		// com.classList.add("commentBox");
		// com.placeholder = val;
		com.innerHTML = val;
		post.append(com);
		e.target.value = "";
	});
});
general.addEventListener("click", () => {
	GeneralMsgs.style.display = "block";
	PrimaryMsgs.style.display = "none";
});
primary.addEventListener("click", () => {
	GeneralMsgs.style.display = "none";
	PrimaryMsgs.style.display = "block";
});

let requestS = document.querySelectorAll(".request");
let btns = document.querySelectorAll(".btn");
let requests = document.querySelector(".requests");
let DeleteBtns = document.querySelectorAll(".DeleteBtn");
let ConfirmBtn = document.querySelector(".ConfirmBtn");
let notifs = document.querySelector(".notifs");
let notifBtn = document.querySelector(".notifBtn");

notifBtn.addEventListener("click", () => {
	notifs.style.display == "block" ? (notifs.style.display = "none") : (notifs.style.display = "block");
});
Array.from(DeleteBtns).forEach((DeleteBtn, index) => {
	DeleteBtn.addEventListener("click", (e) => {
		let elem = e.target.parentElement.parentElement;
		console.log(elem);
		elem.delete;

		// if (requestS.length == "0") {
		// 	requests.innerHTML == `<h1>No Requests</h1>`;
		// }
	});
});
let rebecca = document.querySelector(".rebecca");
let black = document.querySelector(".black");
let crimson = document.querySelector(".crimson");
let cadet = document.querySelector(".cadet");
console.log(btns);
rebecca.addEventListener("click", () => {
	console.log("e");
	btns.forEach((btn) => {
		console.log("d");
		btn.classList.add("rebecca");
		btn.classList.remove("crimson");

		btn.classList.remove("black");

		btn.classList.remove("cadet");
	});
});
cadet.addEventListener("click", () => {
	console.log("e");
	btns.forEach((btn) => {
		console.log("d");
		btn.classList.add("cadet");
		btn.classList.remove("crimson");

		btn.classList.remove("rebecca");

		btn.classList.remove("black");
	});
});
black.addEventListener("click", () => {
	console.log("e");
	btns.forEach((btn) => {
		console.log("d");
		btn.classList.add("black");
		btn.classList.remove("crimson");
		btn.classList.remove("rebecca");
		btn.classList.remove("cadet");
	});
});
crimson.addEventListener("click", () => {
	console.log("e");
	btns.forEach((btn) => {
		console.log("d");
		btn.classList.add("crimson");
		btn.classList.remove("black");

		btn.classList.remove("rebecca");

		btn.classList.remove("cadet");
	});
});
