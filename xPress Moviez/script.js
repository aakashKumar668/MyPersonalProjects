let slides = document.querySelector(".heroSection");

let nextPage = document.querySelector("#nextPage");
let prevPage = document.querySelector("#prevPage");
// let prevBtn = document.querySelector("#prev");
// let nextBtn = document.querySelector("#next");
// let imgTag = document.querySelector(".slide");
// console.log(slides)
let counter = 1;
// "'https://api.themoviedb.org/3/movie/changes?page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let latestMovie = document.querySelector(".latestMovie");
let search = document.querySelector("#search");

prevPage.addEventListener("click", () => {
  counter--;
  getMovies();
  window.scrollTo({ top: 600, behavior: "smooth" });
});

nextPage.addEventListener("click", () => {
  counter++;
  getMovies();
  window.scrollTo({ top: 600, behavior: "smooth" });
});

const getMovies = async () => {
  if (counter === 1) {
    prevPage.disabled = true;
    prevPage.style.opacity = "0.7";
  } else {
    prevPage.disabled = false;
    prevPage.style.opacity = "1";
  }

  // const APIURL = `https://api.themoviedb.org/3/movie/912649/videos?language=en-US&sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1`;
  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${counter}&api_key=04c35731a5ee918f014970082a0088b1`;
  const reponse = await fetch(APIURL);
  const result = await reponse.json();
  const resultData = result.results;

  allMovies(resultData);
};
getMovies();

// nextPage.addEventListener(
//   "click",
//   (getNext = () => {
//     let counter = 1;
//     counter++
//     getMovies(counter);
//     console.log(counter);

//   })
// );
// this is hero section function
const getHero = async () => {
  count = 2;
  // count++
  const HEROAPIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${count}&api_key=04c35731a5ee918f014970082a0088b1`;
  const HEROIMGPATH = "https://image.tmdb.org/t/p/w1280";
  const reponse = await fetch(HEROAPIURL);
  const result = await reponse.json();
  const resultData = result.results;
  const first = resultData.slice(0, 5);
  first.forEach((data) => {
    let imgTag = document.createElement("img");
    imgTag.classList = "slide";
    imgTag.src = HEROIMGPATH + data.poster_path;
    imgTag.setAttribute("href", "index.html");
    slides.appendChild(imgTag);
  });
};
getHero();
// setInterval(getHero,2000)

const allMovies = (data) => {
  latestMovie.innerHTML = "";
  data.forEach((data) => {
    const image =
      data.poster_path === null
        ? "images/image-missing.png"
        : IMGPATH + data.poster_path;
    let latestCard = document.createElement("div");
    latestCard.classList = "latestCard";
    latestCard.innerHTML = `<div class="latestCardImage">
                        <img src="${image}" alt="">
                    </div>
                    <div class="latestMovieData">
                    <div class="latestMovieNameContainer"> <h2 class="latestMovieName">${data.original_title}</h2></div>
                       
                        <ul>
                            <li>Release:${data.release_date}</li>
                            <li>Adventure, Drama, Sci-fi</li>
                        </ul>
                        <div class="movieDesc">
                            <h3>Description</h3>
                            <p id="Description">${data.overview}</p>
                        </div>
                        <div class="buttons">
                            <button><i class="fa-solid fa-play"></i>Watch</button>
                            <ul>
                                <li><a href=""><i class="fa-solid fa-bookmark"></i></a></li>
                                <li><a href=""><i class="fa-solid fa-share-nodes"></i></a></li>

                            </ul>
                        </div>

                    </div>`;

    latestMovie.append(latestCard);
  });
};

search.addEventListener("keyup", function (event) {
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
    document.querySelector(".heroSection").style.display = "none";
  } else {
    getMovies(APIURL);
    // document.querySelector(".heroSection").style.display = "flex";
  }
});
// search.addEventListener("click",()=>{
//  document.querySelector(".heroSection").style.display="none"

// })
search.addEventListener("mouseout", () => {
  document.querySelector(".heroSection").style.display = "flex";
});
