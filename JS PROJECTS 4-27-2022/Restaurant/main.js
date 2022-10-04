// Selections Are here
// Navigation buttons are selected here all , lunch,category,dinner  etc.
let buttons = Array.from(document.querySelectorAll(".nav-links"));
// All food items are selected here
let items = Array.from(document.querySelectorAll(".item-food"));
let CatName = document.querySelector(".Cat_Name");
let search = document.querySelector("#search");
let itemNames = Array.from(document.querySelectorAll(".item-name"));
// console.log(itemName.innerText);


search.addEventListener('change', (e) => {



	items.forEach((item) => {
		let cat = item.dataset.category;
		if(e.target.value.includes(cat)){
			console.log('ehr');
		}
		item.style.display = "none";
		if (e.target.value == cat || e.target.value == cat.toUpperCase() || e.target.value == cat.toLowerCase() || e.target.value == 'all' || e.target.value == 'ALL') {
			CatName.innerText = e.target.value;
			// console.log('hey There');

			item.style.display = "block";
		}
		
		itemNames.forEach((item) => {
			item.style.display = "none";
			let newItem = item.innerText;
			if (e.target.value == newItem.toUpperCase() || e.target.value == newItem.toLowerCase() || e.target.value == newItem) {
				console.log('clikc');
				item.style.display = "block";
			}
			// Onion Fry Masala
		})

	});
})
buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		// This is again to add the tansform styel for the nav-btns
		CatName.innerText = e.target.dataset.id;
		buttons.forEach((button) => {
			button.style.transform = "translate(0)";
		});
		e.target.style.transform = "translateY(-25px)";

		//Here is the cateogory check if matched will be displayed
		items.forEach((item) => {
			let cat = item.dataset.category;
			item.style.display = "none";
			if (e.target.dataset.id == cat) {
				item.style.display = "block";
			} else if (e.target.dataset.id == "all") {
				item.style.display = "block";
			}
		});
	});
});