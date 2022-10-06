let skilldetails = Array.from(document.querySelectorAll(".skill-details"));
let Angles = Array.from(document.querySelectorAll(".Angle"));
// skilldetails.forEach((element) => {
//   Angles.forEach((element) => {
//     element.addEventListener("click", () => {
//       if (element.style.display == "none") {
//         element.style.display = "block";
//         // skilldetail[0].style.transition = "all .5s ease";
//       } else {
//         element.style.display = "none";
//         // skilldetail[0].style.transition = "all .5s ease";
//       }
//     });
//   });
//   //   Angle.addEventListener
// });

// Angles.forEach((element) => {
//   element.onclick = () => {
//     skilldetails.forEach((element) => {
//       console.log("heloo");
//       if (element.style.display == "none") {
//         element.style.display = "block";
//       } else {
//         element.style.display = "none";
//       }
//     });
//   };
// });
let edu = document.querySelector(".edu");
let work = document.querySelector(".working");
let Education = document.querySelector(".Education");
let Work = document.querySelector(".Work");
working.addEventListener("click", () => {
	Education.style.display = "none";
	Work.style.display = "flex";
});
edu.addEventListener("click", () => {
	console.log("hey");
	Education.style.display = "flex";
	Work.style.display = "none";
});
let showmodals = Array.from(document.querySelectorAll(".showmodal"));
let modals = Array.from(document.querySelectorAll(".modal-container"));
let closes = document.querySelectorAll(".close");

showmodals.forEach((showmodal) => {
	showmodal.addEventListener("click", () => {
		modals.forEach((modal) => {
			modal.style.display = "flex";
		});
	});
});
modals.forEach((modal) => {
	closes.forEach((close) => {
		close.addEventListener("click", () => {
			modal.style.display = "none";
		});
	});
});
let pfolios = Array.from(document.querySelectorAll(".pfolio"));
let length = pfolios.length;
let index = 0;

Carousal = () => {
	index++;
	pfolios.forEach((pfolio) => {
		if (index > length - 1) {
			index = 0;
			pfolio.style.transform = `translateX(${index * -100}%)`;
		} else {
			// console.log('hey');
			pfolio.style.transform = `translateX(-${index * 100}%)`;
		}
	});
};
setInterval(Carousal, 4000);

let Mode = document.querySelector(".Mode");
Mode.addEventListener("click", () => {
	document.body.classList.toggle("dark");
});
let nav = document.getElementById("navigation");
let Menu = document.querySelector(".menubar");
Menu.onclick = () => {
	if (nav.style.top == "4rem") {
		nav.style.top = "-15rem";
	} else {
		nav.style.top = "4rem";
	}
};
let skillPerfront = document.querySelector(".skillPerfront");
let skillPerback = document.querySelector(".skillPerback");
let frontend = document.querySelector(".frontend");
let backend = document.querySelector(".backend");
let newd=backend.nextElementSibling.nextElementSibling;
console.log(newd);
// frontend.addEventListener("click", () => {
// 	if (skillPerfront.style.display == "block") {
// 		skillPerfront.style.display = "none";
// 	} else {
// 		skillPerfront.style.display = "block";
// 	}
// });
// backend.addEventListener("click", () => {
// 	if (skillPerback.style.display == "block") {
// 		skillPerback.style.display = "none";
// 	} else {
// 		skillPerback.style.display = "block";
// 	}
// });
