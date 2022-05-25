let MasterBtn = document.querySelector(".MasterBtn");
let Visualizer = document.querySelector(".Visualizer");
let btnsongs = document.querySelectorAll(".btnsong");
let songduration = document.querySelectorAll(".songduration");
let songnames = document.querySelectorAll(".songname");
let singername = document.querySelectorAll(".singername");
let playNow = document.querySelector(".playNow");
let MainSong = new Audio("Jubin/1.mp3");
let Songs = [
	{
		songName: "Jubins",
		song: new Audio("Jubin/1.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin2",
		song: new Audio("Jubin/2.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin3",
		song: new Audio("Jubin/3.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin4",
		song: new Audio("Jubin/4.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin5",
		song: new Audio("Jubin/5.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin6",
		song: new Audio("Jubin/6.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin7",
		song: new Audio("Jubin/7.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin8",
		song: new Audio("Jubin/8.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin9",
		song: new Audio("Jubin/9.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin10",
		song: new Audio("Jubin/10.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin11",
		song: new Audio("Jubin/11.mp3"),
		Singer: "Arijit Singh",
	},
	{
		songName: "Jubin12",
		song: new Audio("Jubin/12.mp3"),
		Singer: "Arijit Singh",
	},
];
songnames.forEach((songname, index) => {
	// songduration.innerHTML =
	songname.innerHTML = Songs[index].songName;
	singername.innerHTML = Songs[index].singername;
});
MasterBtn.addEventListener("click", () => {
	if (MainSong.paused || MainSong.currentTime == 0) {
		MainSong.play();
		bar.value = 0;
		MasterBtn.src = "../pause.png";
		Visualizer.style.opacity = "1";
		makeAllPlays();
	} else {
		MainSong.pause();
		bar.value = 0;
		makeAllPlays();

		MasterBtn.src = "../play.png";
		Visualizer.style.opacity = "0";
	}
});

btnsongs.forEach((btnsong, index) => {
	btnsong.addEventListener("click", () => {
		makeAllPlays();
		Songs[index].song.play();
		btnsong.src = "../pause.png";
		if (Songs[index].song.paused || Songs[index].song.currentTime == 0) {
			Songs[index].song.play();
			controlBar(index);
			MainSong.pause();
			btnsong.src = "../pause.png";
			Visualizer.style.opacity = "1";
		} else {
			Songs[index].song.pause();
			MainSong.pause();
			Songs[index].song.currentTime = 0;
			btnsong.src = "../play.png";
			Visualizer.style.opacity = "0";
		}
	});
});
const func = (i) => {
	// i > 11 ? (i = 1) : i;
	// makeAllPlays();
	// console.log(i);
	// Songs[i].song.play();
	// controlBar(i);
	console.log("called", i);
};
let i = 0;
const AutoPlayer = () => {
	makeAllPlays();
	Songs[i].song.play();
	MainSong.pause();
	MasterBtn.src = "../play.png";
	controlBar(i);
	console.log(Songs[i].song.duration);
	if (Songs[i].song.duration - Songs[i].song.currentTime === 0) {
		i++;
		func(i);
	}
};
const makeAllPlays = () => {
	btnsongs.forEach((btnsong, index) => {
		btnsong.src = "../play.png";
		Songs[index].song.pause();
	});
};
playNow.addEventListener("click", () => {
	makeAllPlays();
	Songs[i].song.play();
	MainSong.pause();
	MasterBtn.src = "../play.png";
	controlBar(i);
	if (Songs[i].song.duration - Songs[i].song.currentTime == 5) {
		console.log("he");
	}
});

let bar = document.querySelector("#bar");
// // Here is the Updating Progress Bar
MainSong.addEventListener("timeupdate", () => {
	let progress = (MainSong.currentTime / MainSong.duration) * 100;

	bar.value = progress;
});

// Here if we manually increase the length of sound
bar.addEventListener("change", () => {
	MainSong.currentTime = (bar.value * MainSong.duration) / 100;
});

const controlBar = (index) => {
	Songs[index].song.addEventListener("timeupdate", () => {
		let progress = (Songs[index].song.currentTime / Songs[0].song.duration) * 100;

		bar.value = progress;
	});
	bar.addEventListener("change", () => {
		// console.log(index);
		Songs[index].song.currentTime = (bar.value * Songs[index].song.duration) / 100;
		// console.log(Songs[index].song.currentTime);
	});
	// console.log(index);
};
