let iconimgs = Array.from(document.getElementsByClassName("iconimg"));
// addEventListener
// iconimg[0].onclick = () => {
iconimgs.forEach((element) => {
  element.onclick = () => {
    if ((element.src = "regular/heart.svg")) {
      element.src = "solid/heart.svg";
    } else {
      element.src = "regular/heart.svg";
    }
  };
});
let womenM = document.getElementById("womenM");
let accesoryM = document.getElementById("accesoryM");
let menM = document.getElementById("menM");
let allM = document.getElementById("allM");

let Women = document.getElementById("women");
let All = document.getElementById("all");
let Accesory = document.getElementById("accesory");
let Men = document.getElementById("men");
womenM.onclick = () => {
  console.log("hello");

  Women.style.transform = "translateX(0)";
  All.style.transform = "translateX(-100%)";
  Men.style.transform = "translateX(-100%)";
  Accesory.style.transform = "translateX(-100%)";
};
allM.onclick = () => {
  console.log("hello");

  All.style.transform = "translateX(0)";
  Women.style.transform = "translateX(-100%)";
  Men.style.transform = "translateX(-100%)";
  Accesory.style.transform = "translateX(-100%)";
};
menM.onclick = () => {
  console.log("hello");

  All.style.transform = "translateX(-100%)";
  Women.style.transform = "translateX(-100%)";
  Men.style.transform = "translateX(0)";
  Accesory.style.transform = "translateX(-100%)";
};
accesoryM.onclick = () => {
  console.log("hello");

  All.style.transform = "translateX(-100%)";
  Women.style.transform = "translateX(-100%)";
  Accesory.style.transform = "translateX(0)";
  Men.style.transform = "translateX(-100%)";
};

// console.log('hie');

// iconimg[0].src = 'regular/heart.svg'
// iconimg[0].src = 'solid/heart.svg'

// if (iconimg[0].src = 'regular/heart.svg') {
//     iconimg[0].src = 'solid/heart.svg'
// }
// };

// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let days = document.getElementById("days");
// let seconds = document.getElementById("seconds");

// setInterval(() => {
//   let date = new Date();

//   hours.innerHTML = date.getHours();
//   minutes.innerHTML = date.getMinutes();
//   days.innerHTML = date.getDay();
//   seconds.innerHTML = date.getSeconds();
// }, 1000);

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    // nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  //   today = mm + "/" + dd + "/" + yyyy;
  //   if (today > birthday) {
  //     birthday = dayMonth + nextYear;
  //   }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      //   if (distance < 0) {
      //     document.getElementById("headline").innerText = "It's my birthday!";
      //     document.getElementById("countdown").style.display = "none";
      //     document.getElementById("content").style.display = "block";
      //     clearInterval(x);
      //   }
      //seconds
    }, 0);
})();

let Menu = document.getElementById("Menu");
let NavBar = document.getElementById("NavBar");

Menu.addEventListener("click", () => {
  if (NavBar.style.top == "-30rem") {
    NavBar.style.top = "0";
  } else {
    NavBar.style.top = "-30rem";
  }
});
let Close = document.getElementById("Close");
let Box = document.querySelector(".Box-container");
let Modal = document.querySelector(".Modal-cont");
let btn = document.querySelector(".btn");

Close.addEventListener("click", () => {
  Modal.style.display = "none";
  // BtnBuys.forEach((BtnBuy) => {
  //   BtnBuy.style.display = "block";
  // });
  // Box.style.background = "rgb(123, 151, 235)";
});

let BtnBuys = Array.from(document.getElementsByClassName("btn-add"));
// console.log(BtnBuy);
BtnBuys.forEach((BtnBuy) => {
  BtnBuy.addEventListener("click", () => {
    Modal.style.display = "flex";
    // BtnBuy.style.display = "none";
    // Box.style.background = "rgba(0, 0, 0, 0.5)";
    // Modal.style.transition = ":all 0.5s ease;";
  });
});
