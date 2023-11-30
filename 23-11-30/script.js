function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let x = rand(0, 99);

if (x >= 0 && x <= 10) {
  let squared = Math.pow(x, 2);
  document.write("Skaičius: " + x + ", Kategorija 1, Rezultatas: " + squared);
} else if (x >= 11 && x <= 19) {
  document.write("Skaičius: " + x + ", Kategorija 2, Rezultatas: " + x);
} else if (x >= 20 && x <= 49 && x % 2 === 0) {
  let answer1 = x - Math.floor(x / 10);
  document.write("Skaičius: " + x + ", Kategorija 3, Rezultatas: " + answer1);
} else if (x >= 20 && x <= 49 && x % 2 !== 0) {
  let answer2 = (x + (x % 10)) / 2;
  document.write("Skaičius: " + x + ", Kategorija 4, Rezultatas: " + answer2);
} else if (x >= 50 && x % 3 === 0) {
  let combination = "";
  const minCharCode = 97;
  const maxCharCode = 122;
  const length = 4;

  for (let i = 0; i < length; i++) {
    const y =
      Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
    combination += String.fromCharCode(y);
  }

  document.write(
    "Skaičius: " + x + ", Kategorija 5, Rezultatas: " + combination
  );
} else {
  document.write(
    "Skaičius: " + x + ", skaičius netinkamas nei vienai kategorijai"
  );
}
