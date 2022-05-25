const quiz = [
  {
    question: "What is the Name of Saad's Laptop ?",

    a: "Asus Vivobook",
    b: "Asus Zenbook",
    c: "Dell Vostro",
    d: "Lenovo Yoga",
    correct: "a",
  },
  {
    question: "What is the Capital of  Turkey ?",

    a: "Instanbul",
    b: "Khizir",
    c: "Vagekistan",
    d: "Islamabad",
    correct: "a",
  },
  {
    question: "Who is the Favorite Programmer of Saad?",

    a: "Easy Tutorials",
    b: "Thappa Technical",
    c: "Code With Harry",
    d: "Mr Web Developer",
    correct: "c",
  },
  {
    question: "Where is Istanbul? ",

    a: "Malaysia",
    b: "India",
    c: "Pakistan",
    d: "Turkey",
    correct: "d",
  },
  {
    question: "Where is the Company of Asus",
    a: "India",
    b: "U.S.A",
    c: "Dubai",
    d: "Japan",
    correct: "b",
  },
];
// let a = 0;
// let b = 5;
//
// console.log(Math.round(b * Math.random()));

let questionQuiz = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submitBtn");
let counter = 0;
let Score = 0;
let answers = Array.from(document.querySelectorAll(".answer"));
QuizLoad();
// Function QuestionQuizquestionQuizs Loader
function QuizLoad() {
  deselectAll();
  questionQuiz.innerHTML = quiz[counter].question;
  a_text.innerHTML = quiz[counter].a;
  b_text.innerHTML = quiz[counter].b;
  c_text.innerHTML = quiz[counter].c;
  d_text.innerHTML = quiz[counter].d;
}
function deselectAll() {
  answers.forEach((answer) => {
    answer.checked = false;
  });
}
function geTChecked() {
  answers.forEach((answer) => {
    if (answer.checked) {
      counter++;
      if (counter < quiz.length) {
        if (answer.id === quiz[counter].correct) {
          Score++;
        }
      }
    }
  });
}
submitBtn.addEventListener("click", () => {
  if (counter < quiz.length) {
    // console.log(counter)
    geTChecked();
    QuizLoad();
  } else {
    let Question = document.getElementById("questions");
    Question.innerHTML = `<h1>You Have Answered Correctly ${Score}/${counter}
   </h1>
   <button onclick=Locationreload()>Reload</button>
    `;
  }
});
