//6 uzd
let sesta = "Once upon a time in hollywood";

document.write("<br/>" + "6 uzduotis:");
let text = sesta.toLowerCase();
document.write("<br/>" + text.replaceAll("o", "*"));

//pagrindine funkcija
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

//7 uzd
let one = rand(0, 2);
let two = rand(0, 2);
let three = rand(0, 2);
let four = rand(0, 2);

let numbers = [one, two, three, four];

function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

let countZeroes = countOccurrences(numbers, 0);
let countOnes = countOccurrences(numbers, 1);
let countTwos = countOccurrences(numbers, 2);
document.write("<br/>" + "<br/>" + "7 uzduotis:");
document.write("<br/>" + numbers);

document.write("<br/>" + `Count of 0s: ${countZeroes}`);
document.write("<br/>" + `Count of 1s: ${countOnes}`);
document.write("<br/>" + `Count of 2s: ${countTwos}`);

//8 uzd
let x = rand(0, 4);
let y = rand(0, 4);
document.write("<br/>" + "<br/>" + "8 uzduotis:");
document.write("<br/>" + x);
document.write("<br/>" + y);
document.write("<br/>" + (Math.max(x, y) / Math.min(x, y)).toFixed(2));

// 9 uzd
let num1, num2, num3;
num1 = rand(0, 25);
num2 = rand(0, 25);
num3 = rand(0, 25);

function findMiddleValue(a, b, c) {
  if ((a >= b && a <= c) || (a <= b && a >= c)) {
    return a;
  } else if ((b >= a && b <= c) || (b <= a && b >= c)) {
    return b;
  } else {
    return c;
  }
}

let middleValue = findMiddleValue(num1, num2, num3);
document.write("<br/>" + "<br/>" + "9 uzduotis:");
document.write("<br/>" + num1);
document.write("<br/>" + num2);
document.write("<br/>" + num3);
document.write("<br/>" + `The middle value is: ${middleValue}`);

//10 uzd

let firstName = "Vytenis";
let lastName = "Šakinis";
let initials = firstName.charAt(0) + lastName.charAt(0);

document.write("<br/>" + "<br/>" + "10 uzduotis:");
document.write("<br>" + initials);

//11 uzd

function generateRandomString(length) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomString;
}

const randomString = generateRandomString(3);
document.write("<br/>" + "<br/>" + "11 uzduotis:");
document.write("<br>" + `Random stringas: ${randomString}`);
