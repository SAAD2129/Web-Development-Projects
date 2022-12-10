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
let ing = [{
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
// CartBtn.addEventListener("click");
// MainBuyNow.addEventListener("click", () => {});

// LOGIN PAGE JS
let logIn = document.querySelector(".logIn"),
    logInAcount = document.querySelector("#loginBtn"),
    LogBtn = document.querySelector(".logBtn"),
    CloseForm = document.querySelector(".close-Form"),
    Container = document.querySelector(".container"),
    GoBackBtn = document.querySelector(".goBack"),
    UserNameinp = document.querySelector(".UserName"),
    Passwordinp = document.querySelector(".Password"),
    RegUser = document.querySelector("#RegUserName"),
    RegPass = document.querySelector("#RegPassword"),
    RegisterAcount = document.querySelector("#regBtn"),
    CloseModbtn = document.querySelector(".close-modal"),
    LoginForm = document.querySelector("#LoginForm"),
    EmailInput = document.querySelector("#email"),
    EmailReg = document.querySelector("#Regemail"),
    SendCodeBtn = document.querySelector(".send-code"),
    ModalTxt = document.querySelector(".modal-text"),
    modal = document.querySelector(".modal"),
    FormControl = document.querySelector(".form-control"),
    ForgotPassword = document.querySelector(".forgot-pass"),
    confirmPass = document.querySelector(".confirmPass"),
    RegistarationForm = document.querySelector("#RegisForm");
let signUp = document.querySelector(".signUp");
signUp.addEventListener("click", () => {
    LoginForm.style.transform = `translateX(-150%)`;
    RegistarationForm.style.transform = `translateX(0%)`;

})
logIn.addEventListener("click", () => {
    LoginForm.style.transform = `translateX(0%)`
    RegistarationForm.style.transform = `translateX(150%)`
})

let Users = [],
    Emails = [];

logInAcount.addEventListener("click", () => {
    // console.log("helo");

    let user = UserNameinp.value;
    // console.log(Passwordinp.value);
    if (Users.includes(user)) {
        let str = UserNameinp.value;
        if (Users.includes(str)) {
            modal.style.display = "block"
            EmailInput.style.display = "none"
            SendCodeBtn.style.display = "none"
            ModalTxt.innerHTML = '<b>You Have logged in Successfully</b>'
            Container.style.display = "none";
            LogBtn.style.display = "none"
        }
    } else {
        modal.style.display = "block",
            EmailInput.style.display = "none",
            SendCodeBtn.style.display = "none",
            ModalTxt.innerHTML = `<b>Please Register User doesn't Exist</b>`
        FormControl.style.display = "none"
    }
    // console.log(user);
})

CloseModbtn.addEventListener('click', () => {
    modal.style.display = "none"
    FormControl.style.display = "flex";
})
ForgotPassword.addEventListener("click", () => {
    FormControl.style.display = "none";
    modal.style.display = "block"
    EmailInput.style.display = "block"
    SendCodeBtn.style.display = "block"
    ModalTxt.innerHTML = ``
})

RegisterAcount.addEventListener("click", (e) => {
    let str = EmailReg.value;
    if (str.includes("@gmail.com")) {
        if (RegUser.value != "") {
            if (RegPass.value == confirmPass.value) {
                Users.push(RegUser.value);
                Emails.push(EmailReg.value);
                EmailReg.value = ""
                RegUser.value = ""
                RegPass.value = ""
                confirmPass.value = ""
                modal.style.display = "block"
                EmailInput.style.display = "none"
                SendCodeBtn.style.display = "none"
                ModalTxt.innerHTML = '<b>You Have Successfully Registered</b>'
                if (EmailReg.value == "")
                    FormControl.style.display = "none"
            } else {
                ModalTxt.innerHTML = '<b>Both Passwords should be same</b>'
                modal.style.display = "block"
                EmailInput.style.display = "none"
                SendCodeBtn.style.display = "none"
                RegPass.value = ""
                confirmPass.value = ""
                // RegisterAccount();
            }
        }
    }
})

LogBtn.addEventListener("click", () => {
    Container.style.zIndex = "54";
    FormControl.style.top = "0"
})
CloseForm.addEventListener("click", () => {
    Container.style.zIndex = "-54"
    FormControl.style.top = "-100%"
})
SendCodeBtn.addEventListener("click",()=>{
    EmailInput.style.display = "none"
    SendCodeBtn.style.display = "none"
    ModalTxt.innerHTML = `<b>Sorry Site Under Contruction Please Visit Later</b>`
})