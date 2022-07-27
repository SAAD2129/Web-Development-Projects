let ResetBtn = document.querySelector('#ResetBtn');
let Inputs = document.querySelectorAll('.inputs input');
let Hint = document.querySelector('.hint');
let Guess = document.querySelector('.guesses');
let popup = document.querySelector('.popup');
let TypingInput = document.querySelector('.TypingInput');
let Wletters = document.querySelector('.wrongLetters');

let inputs = document.querySelector('.inputs');
// RANDOM WORDS FUNCITON
let Word, totalGuesses, incorrects = [],
    corrects = [];
randomWord();
totalGuesses = Math.ceil(Word.length / 2);

function randomWord() {

    popup.style.display = "none";
    let randObj = wordList[Math.floor(Math.random() * wordList.length)];
    // console.log(randObj);
    Word = randObj.word;
    Hint.innerText = randObj.hint;
    console.log(Word);
    let guesses = (Math.floor(Word.length / 2));
    Guess.innerText = guesses;
    let html = "";
    for (let i = 0; i < Word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
const StartGame = (e) => {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/)) {
        // console.log(key);
        TypingInput.value = "";
        if (Word.includes(key)) {
            for (let i = 0; i < Word.length; i++) {
                if (Word[i] === key) {
                    document.querySelectorAll('.inputs input')[i].value = key;
                    corrects.push(key);
                }
            }
        } else {
            incorrects.push(key);
            Wletters.innerText = incorrects;
            totalGuesses--;
            Guess.innerText = totalGuesses;
        }
    }
    if (corrects.length === Word.length) {
        popup.style.display = "block";
        popup.innerText = `Congrats You Guessed Well`;
        for (let i = 0; i < corrects.length; i++) {
            corrects.pop();
        }
        for (let i = 0; i < incorrects.length; i++) {
            incorrects.pop();
        }
         setInterval(() => {

             randomWord();
         }, 2000);
    }
    if (totalGuesses < 1) {
        popup.style.display = "block";
        popup.innerText = `Game Over! The Word was ${Word}`;
        setInterval(() => {
            
            randomWord();
        }, 2000);
        for (let i = 0; i < corrects.length; i++) {
            corrects.pop();
        }
        for (let i = 0; i < incorrects.length; i++) {
            incorrects.pop();
        }
        console.log(corrects.length);
        console.log(incorrects.length);
    }
    popup.style.display = "none";
};
ResetBtn.addEventListener('click', randomWord);
TypingInput.addEventListener('input', StartGame);
document.addEventListener('keydown', () => TypingInput.focus());