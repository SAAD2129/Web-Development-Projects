// ALL VARIABLES SELECTED ARE HERE 
let RotClockBtn = document.querySelector(".rotate-clock"),
    RotAntiBtn = document.querySelector(".rotate-anti"),
    FlipHriBtn = document.querySelector(".flip-h"),
    FlipVertiBtn = document.querySelector(".flip-v"),
    filBtn = document.querySelectorAll(".filBtn"),
    imgPreview = document.querySelector(".img-preview"),
    fillName = document.querySelector(".fill-name"),
    range = document.querySelector("#range"),
    filterBtns = document.querySelector(".filterBtns"),
    filterPercentage = document.querySelector(".fil-per"),
    imgEditor = document.querySelector(".img-editor")

let bright = 100,
    saturation = 100,
    invert = 0,
    grayscale = 0;
FlipHri = 1;
FlipVer = 1;
rotate = 0;
const Filter = () => {
    imgEditor.style.transform = `roatate(${rotate}deg) scale(${FlipHri},${FlipVer})`;
    imgEditor.style.filter = `brightness(${bright}%) saturation(${saturation}%) invert(${invert}%) 
    grayscale(${grayscale}%)`;
}
// ALL CONSTANTS SELECTED ARE HERE 
const fileInput = document.querySelector('.file-img'),
    chooseImg = document.querySelector('.choose-img');

// ALL CONSTANT FUNCTIONS 
const loadImg = () => {
    let file = fileInput.files[0];
    if (!file)
        return;
    imgEditor.src = URL.createObjectURL(file);
}



let id = 0;
RotClockBtn.addEventListener('click', () => {
    id++;
    imgEditor.style.transform = `rotate(${-90*id}deg)`;
})
RotAntiBtn.addEventListener('click', () => {
    id++;
    imgEditor.style.transform = `rotate(${90*id}deg)`;
})
filBtn.forEach(option => {
    option.addEventListener('click', () => {
        filBtn.forEach(option => {
            option.classList.remove('active')
        });
        option.classList.add('active');
        fillName.innerText = option.innerText;
        if (option.id === "bright") {
            filterPercentage.innerText = `${bright}%`
            range.value = bright;
            range.max = "200%";
        }
        if (option.id === "invert") {
            filterPercentage.innerText = `${invert}%`
            range.value = invert;
            range.max = "100%";
        }
        if (option.id === "gray") {
            filterPercentage.innerText = `${grayscale}%`
            range.value = grayscale;
            range.max = "100%";
        }
        if (option.id === "satu") {
            range.max = "200%";
            filterPercentage.innerText = `${saturation}%`
            range.value = saturation;
        }
    })
});
const UpdateFilter = () => {
    filterPercentage.innerText = `${range.value}%`;
    // filBtn.forEach(option => {
    // option.addEventListener('click', () => {
    filBtn.forEach(btn => {
        if (btn.id === "bright")
            bright = range.value;
        else if (btn.id === "invert")
            invert = range.value;
        else if (btn.id === "gray")
            grayscale = range.value;
        else
            saturation = range.value;
        Filter();
    });
    
    // })
    // });
}
// const resetFilters = () => {
//     bright = 100,
//         saturation = 100,
//         invert = 100,
//         grayscale = 100;
// }
// ALL EVENT LISTENERS
chooseImg.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', loadImg);
// range.addEventListener('click', resetFilters);
range.addEventListener('input', UpdateFilter);