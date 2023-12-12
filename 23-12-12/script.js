const people = [];
let currentNumeration = 1;

// Button and input element references:
const addButtonElement = document.querySelector("#add-button");
const numInput = document.querySelector("#numInput");
const delButton = document.querySelector("#delButton");

addButtonElement.addEventListener("click", () => {
  const firstName = document.getElementById("firstNameInput").value.trim();
  const lastName = document.getElementById("lastNameInput").value.trim();
  const age = document.getElementById("ageInput").value.trim();
  const nationality = document.getElementById("nationalityInput").value.trim();

  // Check if any of the input fields are empty
  if (!firstName || !lastName || !age || !nationality) {
    alert("Please fill in all fields before adding.");
    return;
  }

  const person = {
    firstName,
    lastName,
    age,
    nationality,
    number: currentNumeration,
  };

  // Increment the numeration
  currentNumeration++;

  // Add the person to the people array
  people.push(person);

  // Regenerate the table content
  generateTableContent(people);
});

delButton.addEventListener("click", () => {
  const deleteInput = numInput.value.trim();

  if (!deleteInput) {
    alert("Please enter row numbers to delete.");
    return;
  }

  const deleteNumbers = deleteInput
    .split(",")
    .map((num) => parseInt(num.trim()));

  let deleted = false;

  deleteNumbers.forEach((number) => {
    const indexToDelete = people.findIndex(
      (person) => person.number === number
    );

    if (indexToDelete !== -1) {
      people.splice(indexToDelete, 1);
      deleted = true;
    }
  });

  if (deleted) {
    // Renumber the rows after deletion
    renumberRows(people);
    generateTableContent(people);
  } else {
    alert("One or more specified rows do not exist.");
  }
});

function renumberRows(people) {
  people.forEach((person, index) => {
    person.number = index + 1;
  });
}

function generateTableContent(people) {
  // Check if the people array is empty
  if (people.length === 0) {
    alert("No records to display.");
    return;
  }

  let dynamicHTML = "";

  for (let person of people) {
    dynamicHTML += `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>
        </tr>`;
  }

  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = dynamicHTML;
}
