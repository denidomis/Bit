function saveToLocalStorage() {
  const ingredientElements = document.querySelectorAll(".ingredient-item");
  const ingredients = [];

  ingredientElements.forEach((item) => {
    const ingredient = {
      name: item.dataset.name,
      amount: parseFloat(item.dataset.amount),
      unit: item.dataset.unit,
    };
    ingredients.push(ingredient);
  });

  localStorage.setItem("savedIngredients", JSON.stringify(ingredients));
}

// Function to retrieve ingredients from localStorage
function loadFromLocalStorage() {
  const savedIngredients = localStorage.getItem("savedIngredients");
  if (savedIngredients) {
    const ingredients = JSON.parse(savedIngredients);

    ingredients.forEach((ingredient) => {
      const ingredientsList = document.getElementById("ingredientsList");

      const li = document.createElement("li");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "ingredient-item"
      );
      li.dataset.name = ingredient.name;
      li.dataset.amount = ingredient.amount;
      li.dataset.unit = ingredient.unit;

      const itemName = document.createElement("span");
      itemName.textContent = `${ingredient.name} - ${ingredient.amount} ${ingredient.unit}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", function () {
        li.remove();
        calculateTotal();
        saveToLocalStorage(); // Update localStorage after removal
      });

      li.appendChild(itemName);
      li.appendChild(deleteBtn);
      ingredientsList.appendChild(li);
    });

    calculateTotal();
  }
}

// Function to calculate the total amount for each unique ingredient
function calculateTotal() {
  const ingredientMap = new Map();

  const ingredientElements = document.querySelectorAll(".ingredient-item");

  ingredientElements.forEach((item) => {
    const name = item.dataset.name;
    const amount = parseFloat(item.dataset.amount);

    if (ingredientMap.has(name)) {
      const currentAmount = ingredientMap.get(name);
      ingredientMap.set(name, currentAmount + amount);
    } else {
      ingredientMap.set(name, amount);
    }
  });

  const totalContainer = document.getElementById("totalAmount");
  totalContainer.innerHTML = "";

  ingredientMap.forEach((value, key) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${key} - Total Amount: ${value.toFixed(2)}`;
    totalContainer.appendChild(listItem);
  });
}

// Function to add ingredient to the list
function addIngredient(e) {
  e.preventDefault();

  const ingredientName = document.getElementById("ingredientName").value;
  const ingredientAmount = parseFloat(
    document.getElementById("ingredientAmount").value
  );
  const unitSelect = document.getElementById("unitSelect");
  const measurementUnit = unitSelect.options[unitSelect.selectedIndex].value;

  if (ingredientName && !isNaN(ingredientAmount)) {
    const ingredientsList = document.getElementById("ingredientsList");

    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "ingredient-item"
    );
    li.dataset.name = ingredientName;
    li.dataset.amount = ingredientAmount;
    li.dataset.unit = measurementUnit;

    const itemName = document.createElement("span");
    itemName.textContent = `${ingredientName} - ${ingredientAmount} ${measurementUnit}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", function () {
      li.remove();
      calculateTotal();
    });

    li.appendChild(itemName);
    li.appendChild(deleteBtn);
    ingredientsList.appendChild(li);

    calculateTotal();

    document.getElementById("ingredientName").value = "";
    document.getElementById("ingredientAmount").value = "";
  } else {
    alert("Please enter valid ingredient name and amount.");
  }
  saveToLocalStorage();
}

const form = document.getElementById("recipeForm");
form.addEventListener("submit", addIngredient);

// Load ingredients from localStorage on page load
window.addEventListener("load", loadFromLocalStorage);
