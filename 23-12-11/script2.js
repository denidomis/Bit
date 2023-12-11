// 1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
// 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
// 4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
// 5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
// 6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
// 7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
// 8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
// 9. Išrikiuokite masyvą priešinga nei abecelės tvarka
// 10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'

const generateString = (strLength) => {
  let str = "";
  for (let i = 0; i < strLength; i++) {
    const charCode = Math.floor(Math.random() * 26) + 65;
    str += String.fromCharCode(charCode);
  }
  return str;
};

function generateArray(length, array, strLength) {
  for (let i = 0; i < length; i++) {
    array.push(generateString(strLength));
  }
  return array;
}

const array1 = [];
generateArray(100, array1, 4);
document.write(array1 + "</br>");

let newArrayOfStrings = [];

newArrayOfStrings = array1.filter(
  (value) => value[0] === "A" && value[value.length - 1] === "A"
);

document.write(newArrayOfStrings + "</br>");

let newArrayOfStrings1 = [];

newArrayOfStrings1 = array1.filter(
  (value) => value[0] === "X" || value[0] === "M" || value[0] === "K"
);

document.write(newArrayOfStrings1 + "</br>");

let newArrayOfStrings2 = [];

newArrayOfStrings2 = array1.filter((value) => value[1] == value[2]);

document.write(newArrayOfStrings2 + "</br>");

if (newArrayOfStrings2.length < 3) {
  array1.sort();
  document.write(array1 + "</br>");
} else {
  array1.sort().reverse();
  document.write(array1 + "</br>");
}

let char = array1.map((value) => value + generateString(1));

document.write(char + "</br>");

let char1 = array1.map((value) => value.split("").sort().join(""));

document.write(char1 + "</br>");

let amountOfTries = 0;

while (true) {
  const randomStringXMAS = generateString(4);
  if (randomStringXMAS === "XMAS") break;
  else amountOfTries++;
}

document.write(amountOfTries + "</br>");

document.write("NE..." + "</br>");
