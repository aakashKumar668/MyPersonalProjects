let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
masterSongName =document.getElementById("masterSongName")
let songItem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  {
    songName: "Chahun Main Ya Naa Aashiqui 2 Full Song",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Distance Love",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Joon Fakran Di (Official Video) Gurpreet Chattha",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Kooch Na Karin - Full Video  Load Wedding",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName:
      "Bulleya Song with Lyrics  Sultan  Salman, Anushka, Vishal & Shekhar",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName:
      "Do Pal Song with Lyrics  Veer-Zaara  Shah Rukh Khan  Preity Zinta  Javed Akhtar",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "O Saathi Re  Amitabh Bachchan  Muqaddar ka Sikandar",
    filePath: "songs/7.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Piya Aaye Na Aashiqui 2 Full Song",
    filePath: "songs/8.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Tere Hawaale (Full audio) Laal Singh Chaddha",
    filePath: "songs/9.mp3",
    coverPath: "covers/8.jpg",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  // element.getElementsByClassName("timestamp")[0].innerText =songs[i].songName.duration
});

//Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});

//Listen to Event
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText =songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});







document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <=0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

