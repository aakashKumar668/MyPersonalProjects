let searchBox = document.querySelector(".searchBox");
let searchBtn = document.querySelector(".btn");
let mealContainer = document.querySelector(".mealContainer");
let popUpContainer = document.querySelector(".popUpContainer");

const fetchRecipe = async (query) => {
  mealContainer.innerHTML = `<h2>Fetching Recipe....</h2>`;
  let searchApi = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  let response = await searchApi.json();
  // console.log(response);
  showData(response.meals);
  
};

const showData = (dataRecieve) => {
  mealContainer.innerHTML = ""; 
//   console.log(dataRecieve);
  if(dataRecieve !=null){
    dataRecieve.map((data) => {
        let recipeDiv = document.createElement("div");
        recipeDiv.classList.add("card");
        recipeDiv.style.width = "18rem";
        recipeDiv.style.marginTop = "20px";
        recipeDiv.innerHTML = `
            <img src="${data.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title fs-3">${data.strMeal}</h5>
              <p class="card-text pb-2 fs-3">Dish Area: ${data.strArea}</p>
              <p class="card-text pb-2 fs-5">Dish Category: ${data.strCategory}</p>
             
              </div>`;
    
        let recipeBtn = document.createElement("button");
        recipeBtn.classList = "btn btn-primary m-2 fs-5";
        recipeBtn.innerHTML = "See Recipe";
        recipeDiv.appendChild(recipeBtn);
    
        recipeBtn.addEventListener("click", () => {
          showRecipe(data);
        });
        mealContainer.appendChild(recipeDiv);
      });
  }else{
    document.querySelector(".mealContainer").innerHTML=`<h2 class="massage">Sorry..., I have no data for this Query.<br> Search Another Dish Recipe.</h2>`
  }
 
};

const fetchIngrediant = (meal) => {
  let IngredientsList = "";
  for (let i = 0; i < 20; i++) {
    const Ingredient = meal[`strIngredient${i}`];
    if (Ingredient) {
      let measure = meal[`strMeasure${i}`];
      IngredientsList += `<li>${measure} ${Ingredient}</li>`;
    }
  }
  return IngredientsList;
};
const showRecipe = (recipe) => {
  let popUp = document.createElement("div");
  popUp.classList.add = "popUp";
  popUp.innerHTML = `
<h2>${recipe.strMeal}</h2>
<hr>
<h3>Ingredients:</h3>
<ul>${fetchIngrediant(recipe)}</ul>
<div>
    <h3>Instructions:</h3>
    <p>${recipe.strInstructions}</p>
</div>`;
  popUpContainer.appendChild(popUp);
  popUpContainer.style.display = "block";
};
document.querySelector(".popUpClose").addEventListener("click", () => {
  popUpContainer.style.display = "none";
});
// this is search section
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value;
  fetchRecipe(searchInput);
});
