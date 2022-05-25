let btn = document.querySelector("#btn");
let Notif = document.querySelector(".Notif");

btn.addEventListener("click", () => {
	let New = document.createElement("div");
	New.innerHTML = "helli";
	New.classList.add("notif");
	Notif.append(New);
});
