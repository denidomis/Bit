//1 uzd
function generateRandomLetter() {
  const letters = ["A", "B", "C", "D"];
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}

const arrayLength = 200;
const randomArray = Array.from({ length: arrayLength }, generateRandomLetter);

const letterCount = randomArray.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

document.write("<h2>Letter Counts:</h2>");
document.write("<ul>");
for (const letter in letterCount) {
  document.write(`<li>${letter}: ${letterCount[letter]}</li>`);
}
document.write("</ul>");

//2 uzd
randomArray.sort();
const sortedArrayString = randomArray.join(", ");

document.write("<h2>Sorted Array:</h2>");
document.write(`<p>${sortedArrayString}</p>`);

//3 uzd
const randomArray1 = Array.from({ length: arrayLength }, generateRandomLetter);
const randomArray2 = Array.from({ length: arrayLength }, generateRandomLetter);
const randomArray3 = Array.from({ length: arrayLength }, generateRandomLetter);

const sumArray = randomArray1.map((_, index) => {
  const sum = randomArray1[index] + randomArray2[index] + randomArray3[index];
  return sum;
});

const uniqueValues = new Set(sumArray);
const uniqueCombinations = new Set();

for (let i = 0; i < sumArray.length; i++) {
  for (let j = i + 1; j < sumArray.length; j++) {
    uniqueCombinations.add(`${sumArray[i]}, ${sumArray[j]}`);
  }
}

document.write("Number of unique values:", uniqueValues.size);
document.write(
  "</br>" + "Number of unique combinations:",
  uniqueCombinations.size
);

//4 uzd
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomArray(length, min, max) {
  const uniqueArray = [];
  while (uniqueArray.length < length) {
    const randomNumber = generateRandomNumber(min, max);
    if (!uniqueArray.includes(randomNumber)) {
      uniqueArray.push(randomNumber);
    }
  }
  return uniqueArray;
}

const arrayLength1 = 100;
const minNumber = 100;
const maxNumber = 999;

const uniqueRandomArray1 = generateUniqueRandomArray(
  arrayLength1,
  minNumber,
  maxNumber
);
const uniqueRandomArray2 = generateUniqueRandomArray(
  arrayLength1,
  minNumber,
  maxNumber
);
let a = uniqueRandomArray1.join(", ");
let b = uniqueRandomArray2.join(", ");

document.write("</br>" + "Array 1:" + "</br>" + a);
document.write("</br>" + "Array 2:" + "</br>" + b);

//5 uzd
const valuesOnlyInFirstArray = randomArray1.filter(
  (value) => !randomArray2.includes(value)
);
document.write(
  "</br>" +
    "Values in the first array but not in the second array:" +
    valuesOnlyInFirstArray
);

//6 uzd
const filteredArray = uniqueRandomArray1.filter((value) =>
  uniqueRandomArray2.includes(value)
);
document.write(
  "</br>" +
    "Values in the first array and in the second array: " +
    filteredArray
);

//7 uzd
const indexMap = {};
uniqueRandomArray1.forEach((value, index) => {
  indexMap[value] = index;
});

const resultingArray = uniqueRandomArray1.map(
  (value) => uniqueRandomArray2[indexMap[value]]
);

let c = resultingArray.join(", ");
document.write("</br>" + "Resulting Array:" + "</br>" + c);
console.log(resultingArray);
