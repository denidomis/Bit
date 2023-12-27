let allCoctails, categoryList, glassList, ingredientList, alcoholicList;

function filterDrinksByConjuction(arr1, arr2) {
  let resultArr = [];
  for (let drink of arr1) {
    for (let drink2 of arr2) {
      if (drink.idDrink === drink2.idDrink) {
        resultArr.push(drink);
        break;
      }
    }
  }
  return resultArr;
}

const modalData = {
  modalElement: document.querySelector("#modal"),
  modalElementDynamic: document.querySelector("#modal div .dynamic-content"),
};
content = document.querySelector(".content");
(categorySelect = document.querySelector("#drinksbyCategory")),
  (glassSelect = document.querySelector("#drinksbyGlass")),
  (ingredientSelect = document.querySelector("#drinksbyIngredient")),
  (searchInput = document.querySelector("#searchInput"));

const initializeCategoryList = async () => {
  categoryList = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );
  categoryList = await categoryList.json();
  categoryList = categoryList.drinks;
};
const initializeGlassList = async () => {
  glassList = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
  );
  glassList = await glassList.json();
  glassList = glassList.drinks;
};
const initializeIngredientList = async () => {
  ingredientList = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  );
  ingredientList = await ingredientList.json();
  ingredientList = ingredientList.drinks;
};
const initializeAlcoholicList = async () => {
  alcoholicList = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
  );
  alcoholicList = await alcoholicList.json();
  alcoholicList = alcoholicList.drinks;
};

const getAllCoctails = async () => {
  let ordinaryDrinks = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  );
  ordinaryDrinks = await ordinaryDrinks.json();
  let coctails = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );
  coctails = await coctails.json();
  allCoctails = {
    ordinaryDrinks: ordinaryDrinks.drinks,
    coctails: coctails.drinks,
  };

  //kokteiliu atvaizdavimas kataloge
  showDrinksInResultDiv([
    ...allCoctails.coctails,
    ...allCoctails.ordinaryDrinks,
  ]);
};

const showDrinksInResultDiv = async (drinks) => {
  for (const drink of drinks) {
    content.innerHTML += `<div class="card m-2 rounded border border-black" style="width: 18rem;" onclick="openModal(${drink.idDrink})">
		<div class="card-img-top overflow-hidden">
			<img style="width: 100%; height: auto;" src="${drink.strDrinkThumb}" "/> 
		</div>
			<class="card-body">
				<h2 class="text-2xl justify-self-center text-cyan-800 font-semibold text-center max-w-[360px]  pt-5">${drink.strDrink}</h2> 
			</div>
		</div`;
  }
};
async function findRandomAndShow() {
  const drink = await findRandomDrink();
  // console.log(drink);
  openModal(drink);
}

let scrollPosition = 0;
function preventScroll(e) {
  e.preventDefault();
  window.scrollTo(0, scrollPosition);
}
function closeModal() {
  modalData.modalElement.classList.add("hidden");
  document.body.classList.add("modal-close");
  //   modalData.modalElementDynamic.innerHTML = ``;
  //   document.removeEventListener("scroll", preventScroll);
}

async function openModal(drink) {
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  modalData.modalElement.classList.remove("hidden");
  document.body.classList.add("modal-open");
  //   document.addEventListener("scroll", preventScroll);
  let drinkData = drink;
  if (typeof drink === "string" || typeof drink === "number")
    drinkData = await searchDrinkById(drink);
  let html = `<img
	src="${drinkData.strDrinkThumb}"
	alt="drink image"
	class="image w-[40%] rounded-md"
/>
<div class="">
	<h2 class="text-center text-xl">${drinkData.strDrink}</h2>
	<div class="flex flex-col">
		<div class="flex justify-between">
			<span class="font-bold">Category:</span>
			<span class="italic ">${drinkData.strCategory}</span>
		</div>
		<div class="flex justify-between">
			<span class="font-bold">Alcohol:</span>
			<span class="italic ">${drinkData.strAlcoholic}</span>
		</div>
		<div class="flex justify-between">
			<span class="font-bold">Glass:</span>
			<span class="italic ">${drinkData.strGlass}</span>
		</div>		<div class="flex justify-between">
		<span class="font-bold">Ingredients:</span>
		<span class="italic "
			><ul class="px-0">`;
  for (let i = 1; true; i++) {
    if (drinkData["strIngredient" + i])
      html += `<li class="d-flex">
				<p class="font-bold mx-2">${drinkData["strIngredient" + i]}: </p>
				<p>${drinkData["strMeasure" + i]}</p>
			</li>`;
    else break;
  }
  html += `</ul></span>
		</div>
	</div><div class="flex justify-between">
	<span class="font-bold">Recipe:</span>
	<p class="italic">
		${drinkData.strInstructions}
	</p>
</div> 
</div>`;
  document.querySelector("#modal-card").innerHTML = html;
}

async function search() {
  const categorySelectValue = categorySelect.value,
    glassSelectValue = glassSelect.value,
    ingredientSelectValue = ingredientSelect.value,
    searchInputValue = searchInput.value;
  const defaultSelectValue = "empty";
  console.log(
    `categorySelect: ${categorySelectValue} inputValue: ${searchInputValue}`
  );
  let drinksBySearch, drinksByCategory, drinksByGlass, drinksByIngredient;

  if (searchInputValue !== "")
    drinksBySearch = await searchByDrinkName(searchInputValue);
  if (categorySelectValue !== defaultSelectValue)
    drinksByCategory = await searchByCategory(categorySelectValue);
  if (glassSelectValue !== defaultSelectValue)
    drinksByGlass = await searchByGlass(glassSelectValue);
  if (ingredientSelectValue !== defaultSelectValue)
    drinksByIngredient = await searchByIngredient(ingredientSelectValue);
  let drinks;

  if (drinksBySearch) drinks = drinksBySearch;
  if (drinksByCategory) {
    if (!drinks) drinks = drinksByCategory;
    else drinks = filterDrinksByConjuction(drinks, drinksByCategory);
  }
  if (drinksByGlass) {
    if (!drinks) drinks = drinksByGlass;
    else drinks = filterDrinksByConjuction(drinks, drinksByGlass);
  }
  if (drinksByIngredient) {
    if (!drinks) drinks = drinksByIngredient;
    else drinks = filterDrinksByConjuction(drinks, drinksByIngredient);
  }
  if (!drinks)
    drinks = [...allCoctails.ordinaryDrinks, ...allCoctails.coctails];
  showDrinksInResultDiv(drinks);

  return drinks;
}

async function searchByCategory(categoryName) {
  let drinks = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName.replaceAll(
      " ",
      "_"
    )}`
  );
  drinks = await drinks.json();
  return drinks.drinks;
}
//----------NEEEsuprantu sito..
async function searchByDrinkName(drinkName) {
  let drinks = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` +
      drinkName.replaceAll(" ", "-")
  );
  drinks = await drinks.json();
  console.log(drinks);

  return drinks.drinks;
} //?

async function searchByCategoryAndFilterDrinkNames(categoryName, drinkName) {
  let drinks = await searchByCategory(categoryName);
  drinks = drinks.filter((drink) => drink.strDrink === drinkName);
  return drinks;
}
async function searchDrinkById(id) {
  let drink = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
  );
  drink = await drink.json();
  console.log(drink.drinks[0]);
  return drink.drinks[0];
}
async function findRandomDrink() {
  let drink = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  drink = await drink.json();
  return drink.drinks[0];
}
async function searchByGlass(glassName) {
  let drinks = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" +
      glassName.replaceAll(" ", "_")
  );
  drinks = await drinks.json();
  console.log(drinks);
  return drinks.drinks;
}
async function searchByIngredient(ingredientName) {
  let drinks = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
      ingredientName.replaceAll(" ", "_")
  );
  drinks = await drinks.json();
  return drinks.drinks;
}

initializeCategoryList();
initializeGlassList();
initializeAlcoholicList();
initializeIngredientList();

//laikinas, console.logams
setTimeout(() => {
  //mano kintamieji: allCoctails, categoryList, glassList, ingredientList, alcoholicList;
  // console.log(categoryList);
  for (const category of categoryList)
    categorySelect.innerHTML += `<option value="${category.strCategory}">${category.strCategory}</option>`;
  for (const glass of glassList)
    glassSelect.innerHTML += `<option value="${glass.strGlass}">${glass.strGlass}</option>`;
  for (const ingredient of ingredientList)
    ingredientSelect.innerHTML += `<option value="${ingredient.strIngredient1}">${ingredient.strIngredient1}</option>`;
  // console.log(ingredientList);
}, 1000);
getAllCoctails();
