//1 uzd
document.addEventListener("DOMContentLoaded", function () {
  var starsContainer = document.getElementById("starsContainer");
  let stars = "";

  for (let i = 0; i < 400; i++) {
    stars += "*";
    if ((i + 1) % 50 === 0) {
      stars += "\n";
    }
  }

  starsContainer.textContent = stars;
});

//2 uzd
document.addEventListener("DOMContentLoaded", function () {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var randomNumberHeading = document.getElementById("randomNumberHeading");
  randomNumberHeading.innerHTML = `<h${randomNumber}>${randomNumber}</h${randomNumber}>`;
});

//3uzd
document.addEventListener("DOMContentLoaded", function () {
  var numbersContainer = document.getElementById("numbers");
  let numbersHTML = "";

  for (let i = 0; i < 3; i++) {
    var randomNumber = Math.floor(Math.random() * 21) - 10;
    let color = "";

    if (randomNumber < 0) {
      color = "green";
    } else if (randomNumber === 0) {
      color = "red";
    } else {
      color = "blue";
    }

    numbersHTML += `<span style="color: ${color};">${randomNumber}</span><br>`;
  }

  numbersContainer.innerHTML = numbersHTML;
});

//4 uzd
var str = [
  "An American in Paris",
  "Breakfast at Tiffany's",
  "2001: A Space Odyssey",
  "It's a Wonderful Life",
];
for (let i = 0; i < str.length; i++) {
  var noVowels = str[i].replace(/[aeiouy]/gi, "");
  document.write(noVowels + "</br>");
}

//5 uzd
let numbersHTML = "";
let x = 0;
for (let i = 0; i < 300; i++) {
  var randomNumber = Math.floor(Math.random() * 301) + 0;
  let color = "";

  if (randomNumber > 150) {
    x++;
  }
  if (randomNumber > 275) {
    color = "red";
  } else {
    color = "black";
  }

  document.write(`<span style="color: ${color};">${randomNumber} |</span>`);
}
document.write("</br>" + "above 150 number: " + x + "</br>");

//6 uzd
let result = "";

for (let i = 1; i <= 3000; i++) {
  if (i % 77 === 0) {
    result += i;
    if (i !== 3000 && i + 77 <= 3000) {
      result += ", ";
    }
  }
}
document.write(result);
document.write("</br>");
// 7 uzd

let namesArray = [
  "alice",
  "bob",
  "charlie",
  "david",
  "emily",
  "frank",
  "grace",
  "harry",
  "isabella",
  "jack",
  "kate",
  "liam",
  "molly",
  "nathan",
  "olivia",
  "peter",
  "quinn",
  "rachel",
  "steve",
  "tina",
];

for (let i = 0; i < namesArray.length; i++) {
  let names = namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);
  if (i == namesArray.length - 1) {
    document.write(names);
  } else {
    document.write(names + ", ");
  }
}
