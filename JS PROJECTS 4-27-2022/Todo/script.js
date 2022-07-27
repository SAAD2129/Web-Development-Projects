let Add = document.querySelector(".add");
let doneBtn = document.querySelector(".done");
let todoContainer = document.querySelector(".todo-container");
let todoInp = document.querySelector("#todo-inp");

Add.addEventListener("click", () => {
	todoInp.style.zIndex = "0";
});
let val;
todoInp.addEventListener("change", (e) => {
	val = e.target.value;
});
doneBtn.addEventListener("click", () => {
	if (todoInp.value != '') {
		let Div = document.createElement("div");
		todoContainer.append(Div);
		Div.classList.add("todo-item");
		Div.innerHTML = `<p>${val}</p>`;
		todoInp.value = "";
		todoInp.style.zIndex = "-1";
	}


});