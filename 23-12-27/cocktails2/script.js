let assignedLetter,
  allCoctails,
  categoryList,
  glassList,
  ingredientList,
  alcoholicList;

const modalSelector = {
  modalElement: document.querySelector("#modal"),
  modalElementDynamic: document.querySelector("#modal div .dynamic-content"),
};
const content = document.querySelector(".content");
const categorySelect = document.querySelector("#drinksbyCategory");
const glassSelect = document.querySelector("#drinksbyGlass");
const ingredientSelect = document.querySelector("#drinksbyIngredient");
const searchInput = document.querySelector("#searchInput");
const alphabet = document.querySelector(".alphabet");

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
  showDrinksInResultDiv([
    ...allCoctails.coctails,
    ...allCoctails.ordinaryDrinks,
  ]);
};

function filterDrinksJoin(arr1, arr2) {
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

const showDrinksInResultDiv = async (drinks) => {
  let dynamicHTML = "";
  for (const drink of drinks) {
    dynamicHTML += `<div class="card m-2 rounded border border-black" style="width: 18rem;" onclick="openModal(${drink.idDrink})">
		<div class="card-img-top overflow-hidden">
			<img style="width: 100%; height: auto;" src="${drink.strDrinkThumb}" "/> 
		</div>
			<class="card-body">
				<h2 class="text-center pt-4">${drink.strDrink}</h2> 
			</div>
		</div>`;
  }
  content.innerHTML = dynamicHTML;
};

document.querySelector("#findRandom").addEventListener(
  "click",

  async function findRandomAndShow(event) {
    event.preventDefault();
    const drink = await findRandomDrink();
    openModal(drink);
  }
);

let scrollPosition = 0;
function preventScroll(e) {
  e.preventDefault();
  window.scrollTo(0, scrollPosition);
}
function closeModal() {
  modalSelector.modalElement.classList.add("hidden");
  document.body.classList.add("modal-close");
}

async function openModal(drink) {
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  modalSelector.modalElement.classList.remove("hidden");
  document.body.classList.add("modal-open");
  let drinkData = drink;
  if (typeof drink === "string" || typeof drink === "number")
    drinkData = await searchDrinkById(drink);
  let html = `
  <div class="d-flex justify-content-center">
  <img
	src="${drinkData.strDrinkThumb}"
	alt="drink image"
	class="image rounded-md"
  style="width: 30%; height: 50%;"
/>
</div>
<div class="">
	<h2 class="text-center text-xl">${drinkData.strDrink}</h2>
	<div class="flex flex-col p-4">
		<div class="flex justify-between p-2">
			<span class="fw-bold">Category:</span>
			<span class="fst-italic ">${drinkData.strCategory}</span>
		</div>
		<div class="flex justify-between p-2">
			<span class="fw-bold">Alcohol:</span>
			<span class="fst-italic ">${drinkData.strAlcoholic}</span>
		</div>
		<div class="flex justify-between p-2">
			<span class="fw-bold">Glass:</span>
			<span class="fst-italic ">${drinkData.strGlass}</span>
		</div>		
    <div class="flex justify-between p-2">
		<span class="fw-bold">Ingredients:</span>
		<span class="fst-italic "
			><ul class="px-0">`;
  for (let i = 1; true; i++) {
    if (drinkData["strIngredient" + i])
      html += `<li class="d-flex">
				<p class="fw-bold mx-2">${drinkData["strIngredient" + i]}: </p>
				<p>${drinkData["strMeasure" + i]}</p>
			</li>`;
    else break;
  }
  html += `</ul></span>
		</div>
	</div><div class="flex justify-between px-5">
	<span class="fw-bold">Recipe:</span>
	<p class="fst-italic">
		${drinkData.strInstructions}
	</p>
</div> 
</div>`;
  document.querySelector("#modal-card").innerHTML = html;
}

function createAlphabetButtons() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let dynamicHTML = ``;
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    let selectedClass =
      loadSelectedFilters().selectedLetter === letter ? "selected" : "";
    dynamicHTML += `<button class="btn btn-light ${selectedClass}" onclick="handleSelectedLetter('${letter}')">${letter}</button>`;
  }
  alphabet.innerHTML = dynamicHTML;
}
createAlphabetButtons();

function handleSelectedLetter(letter) {
  assignedLetter = letter;
  saveSelectedLetter(assignedLetter);
}

function saveSelectedLetter(letter) {
  localStorage.setItem("selectedLetter", letter);
}

document.querySelector("#search").addEventListener(
  "click",

  async function search(event) {
    event.preventDefault();
    const assignedLetter = localStorage.getItem("selectedLetter") || "";
    const categorySelectValue = categorySelect.value,
      glassSelectValue = glassSelect.value,
      ingredientSelectValue = ingredientSelect.value;
    let searchInputValue;
    const defaultSelectValue = "empty";

    searchInputValue = searchInput.value + assignedLetter;

    let selectedFilters = JSON.stringify({
      categorySelectValue,
      glassSelectValue,
      searchInputValue,
      ingredientSelectValue,
    });
    saveSelectedFilters(selectedFilters);
    console.log(loadSelectedFilters());
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
      else {
        drinks = filterDrinksJoin(drinks, drinksByCategory);
      }
    }
    if (drinksByGlass) {
      if (!drinks) drinks = drinksByGlass;
      else drinks = filterDrinksJoin(drinks, drinksByGlass);
    }
    if (drinksByIngredient) {
      if (!drinks) drinks = drinksByIngredient;
      else drinks = filterDrinksJoin(drinks, drinksByIngredient);
    }
    if (!drinks) {
      drinks = [...allCoctails.ordinaryDrinks, ...allCoctails.coctails];
    }
    showDrinksInResultDiv(drinks);

    return drinks;
  }
);

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

async function searchByDrinkName(drinkName) {
  let drinks = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` +
      drinkName.replaceAll(" ", "-")
  );
  drinks = await drinks.json();
  console.log(drinks);

  return drinks.drinks;
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

//Local storage functions
function saveSelectedFilters(selectedFilters) {
  localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
}

function loadSelectedFilters() {
  return JSON.parse(localStorage.getItem("selectedFilters")) || {};
}

function pageReset() {
  const categorySelectValue = "empty";
  const glassSelectValue = "empty";
  const ingredientSelectValue = "empty";
  const searchInputValue = "";
  const selectedFilters = JSON.stringify({
    categorySelectValue,
    glassSelectValue,
    ingredientSelectValue,
    searchInputValue,
  });
  saveSelectedFilters(selectedFilters);
  pageDefaultLoad();
}

function pageDefaultLoad() {
  setTimeout(() => {
    for (const category of categoryList)
      categorySelect.innerHTML += `<option value="${category.strCategory}">${category.strCategory}</option>`;
    for (const glass of glassList)
      glassSelect.innerHTML += `<option value="${glass.strGlass}">${glass.strGlass}</option>`;
    for (const ingredient of ingredientList)
      ingredientSelect.innerHTML += `<option value="${ingredient.strIngredient1}">${ingredient.strIngredient1}</option>`;
  }, 1000);
  getAllCoctails();
}

//Page initialization
initializeCategoryList();
initializeGlassList();
initializeAlcoholicList();
initializeIngredientList();

setTimeout(() => {
  storedData = loadSelectedFilters();
  const decodedData = JSON.parse(storedData);
  selectValues = {
    categorySelectValue: decodedData.categorySelectValue || "empty",
    glassSelectValue: decodedData.glassSelectValue || "empty",
    searchInputValue: decodedData.searchInputValue || "",
    ingredientSelectValue: decodedData.ingredientSelectValue || "empty",
  };

  if (
    !selectValues ||
    Object.values(selectValues).every(
      (value) => value === "" || value === "empty"
    )
  ) {
    pageDefaultLoad();
  } else {
    console.log(selectValues.searchInputValue);
    let savedSearchInputVal = selectValues.searchInputValue;
    searchInput.value = savedSearchInputVal;

    // Functions to check if a category, glass, or ingredient is selected from localStorage
    function selectCategoryFromLocalStorage(categoryName) {
      const savedCategory = selectValues.categorySelectValue;
      if (savedCategory === categoryName) {
        return "selected";
      }
      return "";
    }

    function selectGlassFromLocalStorage(glassName) {
      const savedGlass = selectValues.glassSelectValue;
      if (savedGlass === glassName) {
        return "selected";
      }
      return "";
    }

    function selectIngredientFromLocalStorage(ingredientName) {
      const savedIngredient = selectValues.ingredientSelectValue;
      if (savedIngredient === ingredientName) {
        return "selected";
      }
      return "";
    }
    for (let i = 1; i < categoryList.length; i++) {
      const category = categoryList[i];
      categoryList.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
      categorySelect.innerHTML += `<option value="${
        category.strCategory
      }" ${selectCategoryFromLocalStorage(category.strCategory)}>${
        category.strCategory
      }</option>`;
    }

    // Iterate through glassList, excluding the first item (default option)
    for (let i = 1; i < glassList.length; i++) {
      const glass = glassList[i];
      glassList.sort((a, b) => a.strGlass.localeCompare(b.strGlass));
      glassSelect.innerHTML += `<option value="${
        glass.strGlass
      }" ${selectGlassFromLocalStorage(glass.strGlass)}>${
        glass.strGlass
      }</option>`;
    }

    // Iterate through ingredientList, excluding the first item (default option)
    for (let i = 1; i < ingredientList.length; i++) {
      const ingredient = ingredientList[i];
      ingredientList.sort((a, b) =>
        a.strIngredient1.localeCompare(b.strIngredient1)
      );
      ingredientSelect.innerHTML += `<option value="${
        ingredient.strIngredient1
      }" ${selectIngredientFromLocalStorage(ingredient.strIngredient1)}>${
        ingredient.strIngredient1
      }</option>`;
    }
    document.querySelector("#search").click();
  }
}, 1000);
