function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let randomNr = rand(1, 20),
  guessCount = 6;
console.log(randomNr);

function guessNumber() {
  let inputElement = document.querySelector("#guess");
  let resultParagraph = document.querySelector("#rez");
  let guessCountElement = document.querySelector("#guessNr");

  if (guessCount === 0) {
    resultParagraph.innerText =
      "Spėjimų skaičius baigėsi, bandykite dar kartą perkrovus puslapį";
    return;
  }
  guessCount--;
  guessCountElement.innerText = guessCount;
  let inputValue = inputElement.value;

  if (inputValue > randomNr) {
    resultParagraph.innerText =
      "Spėjimas buvo neteisingas ieškomas skaičius yra mažesnis";
  } else if (inputValue < randomNr) {
    resultParagraph.innerText =
      "Spėjimas buvo neteisingas, ieškomas skaičius yra didesnis";
  } else {
    resultParagraph.innerText = `Teisingas spėjimas. Po ${
      6 - guessCount
    } bandymų`;
  }
}
