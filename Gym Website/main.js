let Prev = document.querySelector(".prev");
let Next = document.querySelector(".next");
let userImgs = document.querySelector(".user-imgs")
let reviewMsg = document.querySelector(".review-msg");
let userName = document.querySelector(".user-name");
let Post = document.querySelector(".post");
let menuBtn = document.querySelector(".menu-btn");
let navBar = document.querySelector(".navBar");
let index = 0;
const obj = [
    {
        rev: `I made the right choice by choosing the fitness club & by choosing the right plan & program `,
        Name: "METHEW HANDRIKSON ",
        post: "ENTREPRENEUR",
        img: "assets/t-image1.png",
    },
    {
        rev: " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Expedita, blanditiis commodi cupiditate, deleniti recusandae.",
        Name: "DSOUZA PARKER  ",
        post: "CRICKTER",
        img: "assets/t-image2.jpg",
    },
    {
        rev: "aspernatur, animi nam sapiente soluta at ex odit perferendis? Cupiditate cumque ea veniam.",
        Name: "JOHN KEVIN  ",
        post: "COACH",
        img: "assets/t-image3.jpg",
    },
];

Prev.addEventListener("click", () => {
    index--;
    if (index > 2 || index < 0) {
        index = 0;
    }
    // userImgs.forEach((userImg) => {
    //     userImg.style.transform = `translateX(${index * 14}rem)`;
    // });

    // console.log(index);
    reviewMsg.innerHTML = obj[index].rev;
    userName.innerHTML = obj[index].Name;
    userImgs.innerHTML = `<img alt="image" class="user-img" src=${obj[index].img} />`;
    Post.innerHTML = obj[index].post;
});
Next.addEventListener("click", () => {
    index++;
    if (index > 2 || index < 0) {
        index = 0;
    }
    // console.log(index);
    // userImgs.forEach((img) => {
    //     console.log(userImgs);
    //     img.style.transform = `translateX(-${index * 14}rem)`;
    // });
    reviewMsg.innerHTML = obj[index].rev;
    userName.innerHTML = obj[index].Name;
    Post.innerHTML = obj[index].post;
    userImgs.innerHTML = `<img alt="image" class="user-img" src=${obj[index].img} />`;
});
menuBtn.addEventListener("click", () => {
    if (navBar.style.top == "0rem") {
        navBar.style.top = "-100rem";
    } else {
        navBar.style.top = "0rem";
    }
});
window.onscroll = () => {
    navBar.style.top = "-100rem";
};
