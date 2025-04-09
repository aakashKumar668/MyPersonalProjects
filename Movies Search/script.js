const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let row = document.querySelector(".row");

const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  //   console.log(data);
  showMovie(data.results);
};
const showMovie = (data) => {
  row.innerHTML = "";
  // empty the movie box
  data.forEach((item) => {
    // console.log(item);
    let movieBox = document.createElement("div");
    movieBox.classList.add("movieBox");
    movieBox.innerHTML = ` <img src="${
      IMGPATH + item.poster_path
    }" alt="miss movie" id="missmovie">
                                <div class="data">
                    <div class="moviesData">
                    <h2 class="movieName">${item.original_title}</h2>
                    <p class="rating">${item.vote_average}</span></p>
                </div>
                <div class="overView">
                  <p class="overviewdata">
                    <h3>Overview:</h3>
                    ${item.overview}
                  </p>

                </div>
            </div>`;

    row.appendChild(movieBox);
  });
};

document
  .querySelector("#searchMovie")
  .addEventListener("keyup", function (event) {
    // console.log(event.target.value);
    if (event.target.value != "") {
      getMovies(SEARCHAPI + event.target.value);
    } else {
      // popular movies data called
      getMovies(APIURL);
    }
  });
getMovies(APIURL);
