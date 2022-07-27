const Quiz = [
	{
		question: "The atomic number of silicon is 14. Its ground state electronic configuration is",
		a: "1s2 2s2 2p6 3s2 3p4",
		b: "1s2 2s2 2p6 3s2 3p3",
		c: "1s2 2s2 2p6 3s2 3p2",
		d: "1s2 2s2 2p6 3s2 3p1",
		correct: "c",
	},

	{
		question: "What is the valence electron in alkali metal?",
		a: "f-electron",
		b: "d-electron",
		c: "s-electron",
		d: "p-electron",
		correct: "c",
	},
	{
		question: "Of the following pairs of species which one will have the same electronic configuration for both members?",
		a: "Li+ and Na+",
		b: "He and Ne+",
		c: "H and Li",
		d: "C and N+",
		correct: "d",
	},
	{
		question: "Which of the following did Bohr use to explain his theory?",
		a: "Conservation of linear momentum",
		b: "The quantization of angular momentum",
		c: "Conservation of quantum frequency",
		d: "Conservation of mass",
		correct: "b",
	},
	{
		question: `ccording to Bohr's principle, what is the relation between the principal quantum number and the radius of the orbit?`,
		a: "r proportional to  1n",
		b: "r proportional to 1n2",
		c: "r proportional to n",
		d: "r proportional to n2",
		correct: "d",
	},
	{
		question: "The kinetic energy of the α-particle incident on the gold foil is doubled. The distance of closest approach will also be doubled.",
		a: "False",
		b: "True",
		c: "",
		d: "",
		correct: "a",
	},
	{
		question: "If the wavelength of electromagnetic radiation is doubled, what will happen to the energy of photons?",
		a: "Doubled",
		b: "Halved",
		c: "Remains the same",
		d: " Becomes zero",
		correct: "b",
	},
	{
		question: " What is the time period of visible light for which human eye is most sensitive?",
		a: "1.85 × 1015 s",
		b: " 1.85 × 10-15 s",
		c: "3 × 108s",
		d: " 5 × 1016 s",
		correct: "b",
	},
];
let SubMitBtn = document.querySelector(".send");
let a_option = document.querySelector(".a_option");
let b_option = document.querySelector(".b_option");
let c_option = document.querySelector(".c_option");
let d_option = document.querySelector(".d_option");
let question = document.querySelector(".question");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let quizcontianer = document.querySelector(".quizcontianer");
let answers = Array.from(document.querySelectorAll(".answer"));
let counter = 0,
	Score = 0;

a_option.innerText = Quiz[counter].a;
b_option.innerText = Quiz[counter].b;
c_option.innerText = Quiz[counter].c;
d_option.innerText = Quiz[counter].d;
question.innerText = Quiz[counter].question;
function deSelectAll(answers) {}

next.addEventListener("click", () => {
	answers.forEach((answer) => {
		if (answer.checked) {
			if (answer.id == Quiz[counter].correct) {
				Score++;
			}
			counter++;
			// console.log(counter);
			if (counter > Quiz.length - 1) {
				quizcontianer.innerHTML = `<h1>You Got ${Score} Marks From  ${Quiz.length}<h1>`;
			}
			if (counter > Quiz.length - 2) {
				SubMitBtn.style.display = "block";
				prev.style.display = "none";
				next.style.display = "none";
			}
			QuestionUpdater();
		}
	});
});
SubMitBtn.addEventListener("click", () => {
	answers.forEach((answer) => {
		if (answer.checked) {
			if (answer.id == Quiz[counter].correct) {
				Score++;
			}
			counter++;
			// console.log(counter);
			if (counter > Quiz.length - 1) {
				quizcontianer.innerHTML = `<h1>You Got ${Score} Marks From  ${Quiz.length}<h1>`;
			}
			QuestionUpdater();
		}
	});
});
prev.addEventListener("click", () => {
	counter--;
	if (counter > Quiz.length - 1) {
		quizcontianer.innerHTML = `<h1>You Got ${Score} Marks From  ${Quiz.length}<h1>`;
	} else if (counter < 0) {
		counter = 0;
	}

	QuestionUpdater();
});
const makeAllInline = () => {
	a_option.previousElementSibling.style.display = "inline";
	b_option.previousElementSibling.style.display = "inline";
	c_option.previousElementSibling.style.display = "inline";
	d_option.previousElementSibling.style.display = "inline";
};

const QuestionUpdater = () => {
	answers.forEach((answer) => {
		answer.checked = false;
	});
	makeAllInline();
	if (Quiz[counter].a == "") {
		a_option.previousElementSibling.style.display = "none";
	}
	if (Quiz[counter].b == "") {
		b_option.previousElementSibling.style.display = "none";
	}
	if (Quiz[counter].c == "") {
		c_option.previousElementSibling.style.display = "none";
	}
	if (Quiz[counter].d == "") {
		d_option.previousElementSibling.style.display = "none";
	}
	question.innerText = Quiz[counter].question;
	a_option.innerText = Quiz[counter].a;
	b_option.innerText = Quiz[counter].b;
	c_option.innerText = Quiz[counter].c;
	d_option.innerText = Quiz[counter].d;
};
