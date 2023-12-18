const wordInput = document.getElementById("wordInput");
const healthBar = document.getElementById("healthBar");
const monsterInfoDiv = document.getElementById("monsterInfo");
const playerHP = document.getElementById("playerHP");

const validWords = [
  "fire",
  "slash",
  "dtrike",
  "assault",
  "rampage",
  "ravaging",
  "onslaught",
  "annihilate",
  "devastation",
  "obliteration",
];

let monsters = [];
let currentMonsterIndex = 0;

function loadMonsters() {
  fetch("monsters.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      monsters = data;
      loadMonster(monsters[currentMonsterIndex]);
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });
}

let initialHealth = 0;
let remainingHealth = 0;

let playerHealth = 3; // Player's health points
let monsterTimer = 0; // Monster's timer value
let timerInterval; // Variable to store the interval reference

function updateTimerAndCheckHealth() {
  monsterTimer--;
  if (monsterTimer === 0) {
    monsterTimer = monsters[currentMonsterIndex].timer;
    playerHealth--;
    if (playerHealth <= 0) {
      alert("You lose!");
      wordInput.disabled = true;
      clearInterval(timerInterval);
      return;
    }
  }

  playerHP.innerHTML = `
  <label>Player health: ${playerHealth}</label>
  `;

  monsterInfoDiv.innerHTML = `
  <h2>${monsters[currentMonsterIndex].name}</h2>
  <p>Level: ${monsters[currentMonsterIndex].level}</p>
  <p>Timer: ${monsterTimer}</p>
  <p>Health: ${monsters[currentMonsterIndex].health}</p>
`;
}

function startMonsterTimer() {
  timerInterval = setInterval(updateTimerAndCheckHealth, 1000);
}

function stopMonsterTimer() {
  clearInterval(timerInterval);
}

function loadMonster(monster) {
  if (monster) {
    initialHealth = monster.health; // Store initial health
    remainingHealth = initialHealth; // Set remaining health initially to initial health

    monsterInfoDiv.innerHTML = `
          <h2>${monster.name}</h2>
          <p>Level: ${monster.level}</p>
          <p>Health: ${monster.health}</p>
        `;

    healthBar.setAttribute("aria-valuemax", monster.health);
    healthBar.style.width = "100%";
    healthBar.setAttribute("aria-valuenow", monster.health);
    monsterTimer = monster.timer; // Set the monster's timer from JSON
    startMonsterTimer(); // Start the monster timer
  } else {
    monsterInfoDiv.innerHTML = "<p>No more monsters available.</p>";
    healthBar.style.width = "0%";
    healthBar.setAttribute("aria-valuenow", "0");
    stopMonsterTimer(); // Stop the monster timer if no more monsters
  }
}

wordInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const enteredWord = wordInput.value.trim().toLowerCase();

    if (validWords.includes(enteredWord)) {
      monsterTimer = monsters[currentMonsterIndex].timer;
      const damageTaken = enteredWord.length;
      //const currentMonster = monsters[currentMonsterIndex];

      remainingHealth -= damageTaken;

      const remainingPercentage = (remainingHealth / initialHealth) * 100;

      healthBar.style.width = `${remainingPercentage}%`;
      healthBar.setAttribute("aria-valuenow", remainingPercentage);

      if (remainingHealth <= 0) {
        if (currentMonsterIndex < monsters.length - 1) {
          currentMonsterIndex++;
          loadMonster(monsters[currentMonsterIndex]);
        } else {
          monsterInfoDiv.innerHTML = "<p>No more monsters available.</p>";
          wordInput.disabled = true;
        }
      }

      wordInput.value = "";
    } else {
      alert("Please enter a valid English word.");
    }
  }
});

loadMonsters();
