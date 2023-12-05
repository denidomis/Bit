let arra = [];
let arrb = [];
let arrc = [];
let arrd = [];
let arre = [];
let arrf = [];

//1 uzd
document.write("1 task" + "</br>");
document.write("a task" + "</br>");
for (let i = 0; i < 20; i++) {
  arra.push(i);
}
document.write(arra + "</br>");

document.write("b task" + "</br>");
for (let i = 1; i <= 20; i++) {
  arrb.push(i);
}
document.write(arrb + "</br>");

document.write("c task" + "</br>");
for (let i = 19; i >= 0; i--) {
  arrc.push(i);
}
document.write(arrc + "</br>");

document.write("d task" + "</br>");
for (let i = 20; i < 40; i++) {
  arrd.push(i);
}
document.write(arrd + "</br>");

document.write("e task" + "</br>");
for (let i = 49; i > 29; i--) {
  arre.push(i);
}
document.write(arre + "</br>");

document.write("f task" + "</br>");
function generateArray() {
  for (let i = 0; i < 20; i++) {
    let randnum = Math.floor(Math.random() * 11);
    arrf.push(randnum);
  }
  return arrf;
}
generateArray();
document.write(arrf + "</br>");

//2 uzd
document.write("</br>" + "2 task" + "</br>");

document.write(arra.join("-> ") + "</br>");
document.write(arrb.join("-> ") + "</br>");
document.write(arrc.join("-> ") + "</br>");
document.write(arrd.join("-> ") + "</br>");
document.write(arre.join("-> ") + "</br>");
document.write(arrf.join("-> ") + "</br>");

//3uzd
document.write("</br>" + "3 task" + "</br>");

function filterEvens(arr) {
  return arr.filter((element) => {
    return element % 2 !== 0;
  });
}
arrf = filterEvens(arrf);
document.write("a task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

arrf = generateArray();
function filterOdds(arr) {
  return arr.filter((element) => {
    return element % 2 === 0;
  });
}
arrf = filterOdds(arrf);
document.write("b task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterDivisibleBy3(arr) {
  return arr.filter((element) => {
    return element % 3 === 0;
  });
}
arrf = generateArray();
arrf = filterDivisibleBy3(arrf);
document.write("c task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterEqualToIndex(arr) {
  return arr.filter((element, index) => {
    return element === index;
  });
}
arrf = generateArray();
arrf = filterEqualToIndex(arrf);
document.write("d task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterEightAndFive(arr) {
  return arr.filter((element) => {
    return element < 5 || element > 8;
  });
}
arrf = generateArray();
arrf = filterEightAndFive(arrf);
document.write("e task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterTwoToFive(arr) {
  return arr.filter((element) => {
    return element >= 2 && element <= 5;
  });
}
arrf = generateArray();
arrf = filterTwoToFive(arrf);
document.write("f task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterTwoDigitSum(arr) {
  return arr.filter((element, index, array) => {
    let nextElement = index === array.length - 1 ? array[0] : array[index + 1];
    return element + nextElement >= 10 && element + nextElement < 100;
  });
}
arrf = generateArray();
arrf = filterTwoDigitSum(arrf);
document.write("g task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

function filterTwoDigitSumEven(arr) {
  return arr.filter((element, index, array) => {
    let nextElement = index === array.length - 1 ? array[0] : array[index + 1];
    return (element + nextElement) % 2 === 0;
  });
}
arrf = generateArray();
arrf = filterTwoDigitSumEven(arrf);
document.write("h task" + "</br>");
document.write(arrf + "</br>");
arrf.splice(0, arrf.length);

//4uzd
document.write("</br>" + "4 task" + "</br>");
function generateRandomString(length) {
  let randomString = "";
  const uppercaseStart = 65; // ASCII value for 'A'
  const uppercaseEnd = 90; // ASCII value for 'Z'
  const lowercaseStart = 97; // ASCII value for 'a'
  const lowercaseEnd = 122; // ASCII value for 'z'

  for (let i = 0; i < length; i++) {
    const randomCharCode =
      Math.random() < 0.5
        ? Math.floor(Math.random() * (uppercaseEnd - uppercaseStart + 1)) +
          uppercaseStart
        : Math.floor(Math.random() * (lowercaseEnd - lowercaseStart + 1)) +
          lowercaseStart;

    randomString += String.fromCharCode(randomCharCode);
  }

  return randomString;
}

const randomString = generateRandomString(8);
document.write(randomString + "</br>");

//5 uzd
document.write("</br>" + "5 task" + "</br>");

let array = [];

for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * 101);
  if (random >= 40 && random <= 60) {
    i--;
  } else {
    array.push(random);
  }
}
document.write(array.join("\n") + "</br>");

//6 uzd
document.write("</br>" + "6 task" + "</br>");

function outputEvenOddNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      document.write(
        '<span style="color: green;">' + arr[i] + "</span>&nbsp;" + "\n"
      );
    } else {
      document.write(
        '<span style="color: red;">' + arr[i] + "</span>&nbsp;" + "\n"
      );
    }
  }
}

outputEvenOddNumbers(array);

//7 uzd
document.write("</br>" + "</br>" + "7 task" + "</br>");
let avarr = [];
let average;
let sum;
for (let i = 0; i < 80; i++) {
  let randomNr = Math.floor(Math.random() * 32) + 8;
  avarr.push(randomNr);
  document.write(randomNr + ", ");
}
sum = avarr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
average = sum / avarr.length;
document.write(
  "</br>" + '<span style="color: red;">' + average + "</span>&nbsp;" + "\n"
);
