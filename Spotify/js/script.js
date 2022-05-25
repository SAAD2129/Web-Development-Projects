// Variables Initializations

let song = new Audio("mus/0.mp3");
let PlayingSongInfo = document.getElementsByClassName("PlayingSongInfo");
let durationMaster = document.getElementsByClassName("durationMaster");
let SongIndex = 0;
let CurrentT = document.querySelector(".CurrentT");
let MasterDuration = document.querySelector(".CurrentT");
let PlayingSongName = document.querySelector(".PlayingSongName");
let songs = [
  {
    SongName: "ARIJIT Channa Mereya ",
    filePath: new Audio("mus/0.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "ARIJIT Mast Magan ",
    filePath: new Audio("mus/1.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "ARIJIT Hereye Shrey Ghoshal ",
    filePath: new Audio("mus/2.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "ARIJIT_ tere Ho ke rahengy",
    filePath: new Audio("mus/3.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Jubin Nautyal Bewafa Tera Masoom Chehra ",
    filePath: new Audio("mus/4.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Jubin Nautiyal Bedardi Se Pyar Ka sahara na mila ",
    filePath: new Audio("mus/5.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Jubin Nautiyal Dil Ghalti kar betha",
    filePath: new Audio("mus/6.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Jubin Nautiyal Dil Pe Zakham khate hain ",
    filePath: new Audio("mus/7.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Arijit Tum Hi Ho Ashiqui ",
    filePath: new Audio("mus/8.mp3"),
    coverpath: "imgs/logo.png",
  },
  {
    SongName: "Jubin Nautiyal Tum Mere ho Mere Rehna ",
    filePath: new Audio("mus/9.mp3"),
    coverpath: "imgs/logo.png",
  },
];
let Item = Array.from(document.getElementsByClassName("Item"));

// // Here are the Buttons for playing Audio
let MasterBtn = document.getElementById("MasterBtn");
let backbtn = document.getElementById("backbtn");
let forwardbtn = document.getElementById("forwardbtn");
let line = document.querySelector(".line");
MasterBtn.onclick = () => {
  if (song.paused || song.currentTime == 0) {
    song.play();

    line.style.opacity = 1;
  } else {
    song.pause();
    MasterBtn.src = "solid/circle-play.svg";
    line.style.opacity = 0;
  }
};
Array.from(document.getElementsByClassName("duration"));
Item.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
  element.getElementsByClassName("duration").innerText = songs[i].duration;
});
const MakeAllPlays = () => {
  Array.from(document.getElementsByClassName("iconBtn")).forEach((element) => {
    element.src = "solid/circle-play.svg";
  });
};
Array.from(document.getElementsByClassName("iconBtn")).forEach((element) => {
  element.addEventListener("click", (e) => {
    MakeAllPlays();

    // console.log('hello')
    SongIndex = parseInt(e.target.id) - 1;
    song.src = `mus/${SongIndex}.mp3`;
    song.play();
    song.currentTime = 0;
    element.src = "solid/circle-pause.svg";
    MasterBtn.src = "solid/circle-pause.svg";
    line.style.opacity = 1;
    // song.play();
    Array.from(document.getElementsByClassName("duration")).forEach(
      (element) => {
        element.addEventListener("click", (e) => {
          duration.innerText = songs[SongIndex].duration;
        });
      }
    );
  });
});

// Forward & Backward Buttons
forwardbtn.addEventListener("click", () => {
  console.log("hi");
  if (SongIndex >= 9) {
    SongIndex = 0;
  } else {
    SongIndex += 1;
  }
  song.src = `mus/${SongIndex}.mp3`;
  song.currentTime = 0;
  song.play();
  MasterBtn.src = "solid/circle-pause.svg";
  line.style.opacity = 1;
});
backbtn.addEventListener("click", () => {
  if (SongIndex <= 0) {
    SongIndex = 0;
  } else {
    SongIndex -= 1;
  }
  song.src = `mus/${SongIndex}.mp3`;
  song.currentTime = 0;
  song.play();
  line.style.opacity = 1;

  MasterBtn.src = "solid/circle-pause.svg";
  // console.log("hi");
});

// // Here is the Updating Progress Bar
song.addEventListener("timeupdate", () => {
  // console.log(timeupdate);
  let progress = (song.currentTime / song.duration) * 100;

  ProgressBar.value = progress;
});
// Here if we manually increase the length of sound
ProgressBar.addEventListener("change", () => {
  song.currentTime = (ProgressBar.value * song.duration) / 100;
});
