const songs = [
  {
    img: "./image/60_mukadme.jpg",
    name: "60 MUKADME _ MASOOM SHARMA  Manjeet Mor",
    artist: " ",
    music:
      "./songs/60 MUKADME _ MASOOM SHARMA  Manjeet Mor, Shivani Yadav, Shiva Chaudhary  New Haryanvi Song 2024.mp3",
  },
  {
    img: "./image/apa_fer_milenge.jpg",
    name: "Apa Fer Milaange",
    artist: "The Kid LAROI, Justin Bieber",
    music: "./songs/Apa Fer Milaange.mp3",
  },
  {
    img: "./image/Ishq.jpg",
    name: "Ishq Hoya- Jyoti Nooran",
    artist: "Jyoti Nooran  Arjit Singh",
    music:
      "./songs/Ishq Hoya- Jyoti Nooran  Arjit  New Punjabi Songs  New Sad Song  Romantic Love Song 2024.mp3",
  },
  {
    img: "./image/Tu mane ya na mane.jpg",
    name: "Koi Jaane Na_ Tu Mane Ya Na Mane Rabb Manneya (Full Song)",
    artist: "Lakhwinder W,Neeti M  Rochak K, Manoj M",
    music:
      "./songs/Koi Jaane Na_ Tu Mane Ya Na Mane Rabb Manneya (Full Song) Lakhwinder W,Neeti M  Rochak K, Manoj M.mp3",
  },
  {
    img: "./image/O bedardeya.jpg",
    name: "O Bedardeya (Full Video) Tu Jhoothi Main Makkaar",
    artist: "Shraddha  Pritam,Arijit Singh, Amitabh B",
    music:
      "./songs/O Bedardeya (Full Video) Tu Jhoothi Main Makkaar  Ranbir, Shraddha  Pritam,Arijit Singh, Amitabh B.mp3",
  },
  {
    img: "./image/Payal.jpg",
    name: "PAYAL SONG (Official Video)_ YO YO HONEY SINGH",
    artist: "YO YO HONEY SINGH  NORA FATEHI  PARADOX  GLORY  BHUSHAN KUMAR",
    music:
      "./songs/PAYAL SONG (Official Video)_ YO YO HONEY SINGH  NORA FATEHI  PARADOX  GLORY  BHUSHAN KUMAR.mp3",
  },
  {
    img: "./image/Rangreza.jpg",
    name: "Rangreza _ Atif Aslam (Tu Na Kariyo Fer Bhi - Full Video)",
    artist: "Guri - Punjabi Song, Atif Aslam",
    music:
      "./songs/Rangreza _ Atif Aslam (Tu Na Kariyo Fer Bhi - Full Video) Guri - Punjabi Song - Geet MP3.mp3",
  },
  {
    img: "./image/Rusya na kar.jpg",
    name: "Tere nal jeewa gy tere nal marange full song",
    artist: "tahir abbas ft rafeel ijaz lyrical",
    music:
      "./songs/Tere nal jeewa gy tere nal marange full song tahir abbas ft rafeel ijaz lyrical video.mp3",
  },
  {
    img: "./image/Tere Warga.jpg",
    name: "TERE WARGA",
    artist: "SAVI KAHLON  THE MASTERZ",
    music: "./songs/TERE WARGA  SAVI KAHLON  THE MASTERZ  DUMMY AUDIO.mp3",
  },
  {
    img: "./image/ve kamleya.jpg",
    name: "Ve Kamleya  Rocky Aur Rani Kii Prem Kahaani",
    artist: " Pritam  Amitabh  Arijit  Shreya",
    music:
      "./songs/Ve Kamleya  Rocky Aur Rani Kii Prem Kahaani  Ranveer  Alia  Pritam  Amitabh  Arijit  Shreya.mp3",
  },
];

let songIndex  = 0;
let lyricsSong = document.querySelector(".lyricsSong");
let songPlaydataMain =document.querySelector(".songPlaydataMain");
let masterPlay = document.querySelector("#masterPlay");
let volumeControl = document.querySelector("#volumeControl")
// let volumeLow = document.querySelector(".volumeLow");
// let volumeHigh = document.querySelector(".volumeHigh");
let progressBar = document.querySelector("#seekbar");
let timeDisplay = document.querySelector(".currentSongDuration");
let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");
let audio = new Audio(songs[songIndex].music)
let image = songs[songIndex].img;
let SongName = songs[songIndex].name;
let artist = songs[songIndex].artist;





// This is new code for all data recieve;

songs.forEach((data, index) => {
  let song = document.createElement("div");
  song.classList = "song";
  song.innerHTML = `
                      <div class="songImg">
                        <img src=".${data.img}" alt="music-song" id="songImage">
                      </div>
                       <div class="songName">
                       <p id="songName">
                        ${data.name}    
                    </p></div>
                        <img src="./image/music-gif.gif" alt="gif" id="gif">
    `;
  document.querySelector(".songList").appendChild(song);

song.addEventListener("click",()=>{
  showdata(index)
})
});



const showdata=(index)=>{
  songIndex = index
let {img,name, artist,music } = songs[songIndex];
audio.src = music;
  masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
audio.play();
image = img;
SongName = name;
artist = artist;
showLyricsBox()
mainPlayer()  
}
// This is next and previous func
nextBtn.addEventListener("click",()=>{
  if(songIndex+1 ==songs.length){
    songIndex=0;
    audio.src = songs[songIndex].music
    audio.play()  
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    image = songs[songIndex].img;
   SongName =songs[songIndex].name;
   artist =songs[songIndex].artist;
   showLyricsBox()
   mainPlayer()  
  }else{
    songIndex++
    audio.src = songs[songIndex].music
    audio.play()
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    image = songs[songIndex].img;
    SongName =songs[songIndex].name;
    artist =songs[songIndex].artist;
    showLyricsBox()
    mainPlayer()  
    
  }
  
});
prevBtn.addEventListener("click",()=>{
  if(songIndex<=0){
    songIndex=9
    audio.src = songs[songIndex].music
    audio.play()
    image = songs[songIndex].img;
    SongName =songs[songIndex].name;
    artist =songs[songIndex].artist;
    showLyricsBox()
    mainPlayer()  
  }else{
    songIndex--
    audio.src = songs[songIndex].music
    audio.play()
    image = songs[songIndex].img;
    SongName =songs[songIndex].name;
    artist =songs[songIndex].artist;
    showLyricsBox()
    mainPlayer()  
  }
  
})


// /* This is Seekbar Section */
 audio.addEventListener("timeupdate",()=>{
  progress= parseInt((audio.currentTime/audio.duration)*100);
  progressBar.value = progress
 })
progressBar.addEventListener("change",()=>{
  audio.currentTime=progressBar.value*audio.duration/100;
})

// This is Show song duration func :
audio.addEventListener('loadedmetadata', () => {
  const duration = formatTime(audio.duration);
  timeDisplay.textContent = `0:00 / ${duration}`;
});

audio.addEventListener('timeupdate', () => {
  const currentTime = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);
  timeDisplay.textContent = `${currentTime} / ${duration}`;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

 /* This is volume section */
 volumeControl.addEventListener("input",()=>{
  audio.volume=volumeControl.value;

 })
//  volumeLow.addEventListener("click",()=>{
//   audio.volume-= 0.1
//   volumeControl.value -=0.1
//  })
//  volumeHigh.addEventListener("click",()=>{
//   audio.volume+= 0.1
//   volumeControl.value +=0.1
//  })
// This is master Play Pause button
 masterPlay.addEventListener("click",()=>{
  if(audio.paused ){
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    audio.play()
  }else{
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    audio.pause()
  }
 })

// /* This is lyrics Box Song Function */
const showLyricsBox=()=>{
  lyricsSong.innerHTML="";
  let currentInLyrics = document.createElement("div");
  currentInLyrics.classList='lyricsBoxSong'
  currentInLyrics.innerHTML=`
   <img src="${image}" alt="music" id="playerImage">
                    <div class="playerSongNameContainer">
                        <h2 class="playerSongName">${SongName}</h2>
                    </div>`
                    lyricsSong.appendChild(currentInLyrics)    
                             
}
/*This is player song Show Func */
const mainPlayer = ()=>{
  songPlaydataMain.innerHTML=""
let songPlaydata = document.createElement("div");
songPlaydata.classList="songPlaydata";
songPlaydata.innerHTML=`
  <img src="${image}" alt="My-Music" id="songPlaydataImg">
                <p class="songPlaydataName">${SongName}</p>
                <p class="songArtist">${artist}</p>
`
songPlaydataMain.appendChild(songPlaydata)

}


// This is old code section



/* This are all songs loop code section */
// songs.forEach((data) => {
//   let song = document.createElement("div");
//   song.classList = "song";
//   song.innerHTML = `
//                       <div class="songImg">
//                         <img src=".${data.img}" alt="music-song" id="songImage">
//                       </div>
//                        <div class="songName">
//                        <p id="songName">
//                         ${data.name}    
//                     </p></div>
//                         <img src="./image/music-gif.gif" alt="gif" id="gif">
//     `;
//   document.querySelector(".songList").appendChild(song);

// song.addEventListener("click",()=>{
//   showLyricsBox(data)
//   mainPlayerSong(data)
//   mainAudio(data.music)
// })
// });
// /* This is lyrics Box Song Function */
// const showLyricsBox=(data)=>{
//  lyricsSong.innerHTML="";
//   let currentInLyrics = document.createElement("div");
//   currentInLyrics.classList='lyricsBoxSong'
//   currentInLyrics.innerHTML=`
//    <img src="${data.img}" alt="music" id="playerImage">
//                     <div class="playerSongNameContainer">
//                         <h2 class="playerSongName">${data.name}</h2>
//                     </div>`
//                     lyricsSong.appendChild(currentInLyrics)               

// }
// /* This is Main Player Song Function*/
// const mainPlayerSong = (data)=>{
//   songPlaydataMain.innerHTML=""
// let songPlaydata = document.createElement("div");
// songPlaydata.classList="songPlaydata";
// songPlaydata.innerHTML=`
//   <img src="${data.img}" alt="My-Music" id="songPlaydataImg">
//                 <p class="songPlaydataName">${data.name}</p>
// `
// songPlaydataMain.appendChild(songPlaydata)
// }


// /* This is play Song Function*/

// const mainAudio=(data)=>{
//   audio.src = ''
//   audio.src = data
//   audio.play()
//   masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");
//   audio.volume=1
//  }
// // This is master Play Pause button
//  masterPlay.addEventListener("click",()=>{
//   if(audio.paused ){
//     masterPlay.classList.remove("fa-play");
//     masterPlay.classList.add("fa-pause");
//     audio.play()
//   }else{
//     masterPlay.classList.remove("fa-pause");
//     masterPlay.classList.add("fa-play");
//     audio.pause()
//   }
//  })

//  /* This is volume section */
//  volumeControl.addEventListener("input",()=>{
//   audio.volume=volumeControl.value;

//  })
// //  volumeLow.addEventListener("click",()=>{
// //   audio.volume-= 0.1
// //   volumeControl.value -=0.1
// //  })
// //  volumeHigh.addEventListener("click",()=>{
// //   audio.volume+= 0.1
// //   volumeControl.value +=0.1
// //  })
// /* This is Seekbar Section */
//  audio.addEventListener("timeupdate",()=>{
//   progress= parseInt((audio.currentTime/audio.duration)*100);
//   progressBar.value = progress
//  })
// progressBar.addEventListener("change",()=>{
//   audio.currentTime=progressBar.value*audio.duration/100;
// })

// // This is Show song duration func :
// audio.addEventListener('loadedmetadata', () => {
//   const duration = formatTime(audio.duration);
//   timeDisplay.textContent = `0:00 / ${duration}`;
// });

// audio.addEventListener('timeupdate', () => {
//   const currentTime = formatTime(audio.currentTime);
//   const duration = formatTime(audio.duration);
//   timeDisplay.textContent = `${currentTime} / ${duration}`;
// });

// function formatTime(time) {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60);
//   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }

// // this is next and prev song controls func:

// nextBtn.addEventListener("click",()=>{
//   if(songIndex+1 ==songs.length){
//     songIndex=0;
//     audio.src = songs[songIndex].music
//     audio.play()
//   }else{
//     songIndex++
//     audio.src = songs[songIndex].music
//     audio.play()
//   }
// })
// prevBtn.addEventListener("click",()=>{
//   if(songIndex<=0){
//     songIndex=9
//     audio.src = songs[songIndex].music
//     audio.play()
//   }else{
//     songIndex--
//     audio.src = songs[songIndex].music
//     audio.play()
//   }
// })