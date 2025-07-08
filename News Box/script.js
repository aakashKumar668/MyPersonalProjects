// let API = `http://api.mediastack.com/v1/news?access_key=f98ee52fdab51afbe03db2f1374088ca&sources=general`;
let navCategory = document.querySelector(".navCategory");
let API = `https://gnews.io/api/v4/top-headlines?category=general&lang=hi&country=in&max=50&apikey=0ff717a18b18591f69dc67d3758da4e5`;
let searchBox = document.querySelector(".searchBox");
let mainCardContainer = document.querySelector(".mainCardContainer");

let userName = prompt("Please Enter Your Name (In capital letter)")
document.querySelector(".userName").innerHTML=userName

const fetchData = async (data) => {
  let response = await fetch(data);
  let dataJson = await response.json();
  showNews(dataJson.articles)
};

const showNews=(newsData)=>{
  mainCardContainer.innerHTML="";
  newsData.map((data)=>{
    // console.log(data);
    let desc = data.description;
    const shortText = desc.slice(0, 90) + '...' 
    let mainNewsCard = document.createElement("div");
    mainNewsCard.classList= 'm-auto card'
    mainNewsCard.style.maxWidth= "540px"
    mainNewsCard.innerHTML=`
            <div class="row g-0">
              <div class="col-md-4 pt-5">
                <img
                  src="${data.image}"
                  alt="News Image"
                  class="img-fluid rounded-start"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.title}</h5>
                  <p class="card-text">
                   ${shortText}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">${data.publishedAt} ago.</small>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Published: ${data.source.name}</small>
                  </p>
                </div>
              </div>
            </div>
    `
    let MoreNews = document.createElement('p');
MoreNews.classList = "learnMoreNews text-primary fw-bold m-auto mb-2 text-decoration-underline"
    MoreNews.innerText = "More..."
    let mainPage =document.createElement("p");
    mainPage.classList="learnMainNews text-primary fw-bold m-auto mb-5 text-decoration-underline"
    mainPage.innerText='Go to main page...'
    mainNewsCard.appendChild(MoreNews)
    mainNewsCard.appendChild(mainPage)

    MoreNews.addEventListener("click", ()=>{
      showMoreNews(data)
    })
    mainCardContainer.appendChild(mainNewsCard)
    mainPage.addEventListener("click",()=>{
      window.location.href=data.url
    })
  })
}


searchBox.addEventListener("keyup",(e)=>{ 
  if (e.target.value !="") {
    fetchData(
      `https://gnews.io/api/v4/search?q=${e.target.value}&lang=hi&country=in&max=10&apikey=0ff717a18b18591f69dc67d3758da4e5`
    );
  } else{
    fetchData(API);
  }
});
fetchData(API);

// This is More News Funcitions

const showMoreNews = (data)=>{

  let MoreNewsCard = document.createElement("div");
  MoreNewsCard.classList = "w-75 m-auto "
  MoreNewsCard.innerHTML=`
  <div class="card  mb-3 overflow-y-scroll">
  <img src="${data.image}" class="w-50 m-auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.description}</p>
    <p class="card-text"><small class="text-body-secondary">${data.publishedAt}</small></p>
    <p class="card-text"><small class="text-body-secondary">${data.source.name}</small></p>
  </div>
</div>`
let mainPage =document.createElement("p");
    mainPage.classList="learnMainNewsPopUp text-primary fw-bold m-auto mb-5 text-decoration-underline"
    mainPage.innerText='Go to main page...'
    MoreNewsCard.appendChild(mainPage)
    document.querySelector(".moreNewsContainer").appendChild(MoreNewsCard)
    document.querySelector(".mainMoreNewsContainer").style.display = "block"
  mainPage.addEventListener("click",()=>{
    window.location.href=data.url
  })
    
}

// This Is PopUp close event

 document.querySelector(".closePopUp").addEventListener("click",()=>{
   document.querySelector(".moreNewsContainer").innerHTML =""
document.querySelector(".mainMoreNewsContainer").style.display = "none"
  

})