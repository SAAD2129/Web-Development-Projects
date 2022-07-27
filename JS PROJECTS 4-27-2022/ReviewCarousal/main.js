let Reviews = [
	{
		img: "client-1.png",
		profession: "Fronend Dev",
		Name: "Alex winder",
		desc:
			"Alex Winder Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure magni quaerat sit dolor, ullam ut quam optio cumque consequuntur explicabo sed quae quasi ab quidem libero accusamus sint? Veniam?",
	},
	{
		img: "client-2.png",
		profession: "Full Stack  Dev",
		Name: "Wenso Rensick",
		desc:
			"Wenso Rensick Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure magni quaerat sit dolor, ullam ut quam optio cumque consequuntur explicabo sed quae quasi ab quidem libero accusamus sint? Veniam?",
	},
	{
		img: "client-3.png",
		profession: "Backend Dev",
		Name: "Dsouza winker",
		desc:
			"Dsouza winker Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure magni quaerat sit dolor, ullam ut quam optio cumque consequuntur explicabo sed quae quasi ab quidem libero accusamus sint? Veniam?",
	},
	{
		img: "user-1.png",
		profession: "Hacker",
		Name: "Aenna",
		desc:
			"Aenna winker Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure magni quaerat sit dolor, ullam ut quam optio cumque consequuntur explicabo sed quae quasi ab quidem libero accusamus sint? Veniam?",
	},
	{
		img: "user-3.png",
		profession: "Problem Solver",
		Name: "Sarah",
		desc:
			"Sarah winker Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure magni quaerat sit dolor, ullam ut quam optio cumque consequuntur explicabo sed quae quasi ab quidem libero accusamus sint? Veniam?",
	},
];
let Img = document.querySelector(".img-user");
let Name = document.querySelector(".name");
let Desc = document.querySelector(".desc");
let Prof = document.querySelector(".profession");
let Next = document.querySelector(".next");
let Prev = document.querySelector(".prev");
let spBtn = document.querySelector(".sp");
let index = 0;
// let len = Img.length - 1;
Next.addEventListener("click", () => {
	index++;
	// console.log(len);
	if (index > Reviews.length - 1 || index < 0) {
		index = 0;
	}
	console.log(Reviews.length);
	Img.src = Reviews[index].img;
	Name.innerText = Reviews[index].Name;
	Desc.innerText = Reviews[index].desc;
	Prof.innerText = Reviews[index].profession;
});
index = Reviews.length - 1;
Prev.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = Reviews.length - 1;
	}

	console.log(index);
	// console.log(Reviews.length);
	Img.src = Reviews[index].img;
	Name.innerText = Reviews[index].Name;
	Desc.innerText = Reviews[index].desc;
	Prof.innerText = Reviews[index].profession;
});
spBtn.addEventListener("click", () => {
	let rand = Math.random() * 5;
	rand = Math.round(rand);
	console.log(rand);
	Img.src = Reviews[rand].img;
	Name.innerText = Reviews[rand].Name;
	Desc.innerText = Reviews[rand].desc;
	Prof.innerText = Reviews[rand].profession;
});
