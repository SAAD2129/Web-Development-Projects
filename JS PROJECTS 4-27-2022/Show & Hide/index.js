let Hiders = document.querySelectorAll(".hider");
let paras = document.querySelectorAll(".para");
Hiders.forEach((Hider) => {
	Hider.addEventListener("click", () => {
		paras.forEach((paras) => {
			paras.style.display = "none";
		});
		Hider.nextElementSibling.style.display = "block";
	});
});
