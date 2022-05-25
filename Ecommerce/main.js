let Menu = document.querySelector(".Menu");
let Nav = document.getElementById("Navigation");
Menu.onclick = () => {
	// console.log("hhey");
	if (Nav.style.top == "6.5rem") {
		Nav.style.top = "-30rem";
		Menu.src = "../icons/align-center-justify.svg";
	} else {
		Nav.style.top = "6.5rem";
		Menu.src = "../icons/svg/close.svg";
	}
};
let ing = [
	{
		price: 3534,
		name: "shoes jogger",
		category: "shoes",
	},
	{
		price: 4500,

		name: "shoes jogger",
		category: "shoes",
	},
	{
		price: 1600,

		name: "Sylish Blue Bag",
		category: "bag",
	},
	{
		price: 2500,

		name: "Pink Cap",
		category: "cap",
	},
];
// setTimeout(() => {
//   console.log("clicke");
// }, 5000);
window.onscroll = () => {
	Nav.style.top = "-30rem";
	Menu.src = "../icons/align-center-justify.svg";
};
console.log("hey");
let buyNows = document.querySelectorAll(".buyNow");
let priceMain = document.querySelector(".priceMain");
let select = document.querySelector(".select");
let Name = document.querySelector("#name");
let MainBuyNow = document.querySelector("#MainBuyNow");
let CartBtn = document.querySelector("#CartBtn");
let DetailsProduct = document.querySelector(".DetailsProduct");
let productImgs = Array.from(document.querySelectorAll(".productimg"));
let imgProd = document.getElementById("imgProd");
// console.log(buyNows);

buyNows.forEach((buyNow, index) => {
	buyNow.addEventListener("click", () => {
		imgProd.src = productImgs[index].src;
		// DetailsProduct.innerHTML = ing[index].id;
		// Name.innerHTML = ing[index].name;
		priceMain.innerHTML = ing[index].price;
		if (ing[index].category === "shoes") {
			select.innerHTML = `<h5>Select Size</h5>
      <button class="btn btn-dark mr-min">39</button>
      <button class="btn btn-dark mr-min">40</button>
      <button class="btn btn-dark mr-min">41</button>`;
		}
	});
	// console.log(element, index);
});
CartBtn.addEventListener("click");
MainBuyNow.addEventListener("click", () => {});
