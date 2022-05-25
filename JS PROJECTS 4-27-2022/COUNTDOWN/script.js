let daysel = document.getElementById("days");
let hoursel = document.getElementById("hours");
let minutesel = document.getElementById("minutes");
let secondsel = document.getElementById("seconds");

let TargetDate = "30 April 2022";

formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
setInterval((countDown) => {}, 1000);
countDown = () => {
  let TD = new Date(TargetDate);
  let currentDate = new Date();
  const total_seconds = (TD - currentDate) / 1000;
  const days = Math.floor(total_seconds / 3600 / 24);
  const hours = Math.floor(total_seconds / 3600) % 24;
  const minutes = Math.floor(total_seconds / 60) % 60;
  const seconds = Math.floor(total_seconds) % 60;
  console.log(seconds);
  daysel.innerHTML = days;
  hoursel.innerHTML = hours;
  minutesel.innerHTML = minutes;
  secondsel.innerHTML = seconds;
};
