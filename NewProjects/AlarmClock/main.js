const selectMenu = document.querySelectorAll("select");
let Time = document.querySelector('#Time');
let Selcetion = document.querySelector('.Selcetion');
let setAlarmBtn = document.querySelector('.setAlarm');
let close = document.querySelector('.close');
let popup = document.querySelector('.popup');
let text = document.querySelector('.text');
let Ring = new Audio("01.mp3");
let AlarmTime, isSetAlarm=false;
console.log(selectMenu);
for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
let h,
    m,
    s,
    date;
setInterval(() => {
    date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    Time.innerHTML = `${h}:${m}:${s} ${ampm}`;
    if (AlarmTime == `${h}:${m} ${ampm}`) {
        Ring.play();
    }
}, 1000);

let SetAlarm = () => {
    if (isSetAlarm) {
        Ring.pause();
        AlarmTime="";
            Selcetion.classList.remove('disable');
            setAlarmBtn.innerText = "Set Alarm";
            console.log(AlarmTime);
            selectMenu[0].value="Hours";
            selectMenu[1].value="Minutes";
            selectMenu[2].value="AM/PM";
             popup.style.display = "block";
             text.innerText=`Alarm Has been Cleared`;
        return isSetAlarm=false;

    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if (!time.includes("Minute") || !time.includes("Hours") || !time.includes("AM/PM")) {
          Selcetion.classList.add('disable');
          setAlarmBtn.innerText = "Clear Alarm";
          popup.style.display="block";
            text.innerText = `Alarm Has been Setted to ${time}`
    }
    isSetAlarm=true;
    AlarmTime=time;
}
close.addEventListener("click",()=>{
      popup.style.display = "none";
})
setAlarmBtn.addEventListener('click', SetAlarm);