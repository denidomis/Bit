function showMessage(message) {
  console.log(message);
}

// console.log(showMessage("Labas pasauli"));

showMessage("Labas pasauli");

function findBiggerValue(a, b) {
  function isBiggerThanB(aValue, bValue) {
    return aValue > bValue;
  }
  console.log(isBiggerThanB(a, b));
  if (isBiggerThanB(a, b)) {
    return a;
  } else {
    return b;
  }
}

console.log(findBiggerValue(4, 5));

function findMaxValue(...args) {
  let max = args[0];
  for (let index in args) {
    if (args[index] > max) {
      max = args[index];
    }
  }
  console.log(max);
}

findMaxValue(4, 7, 8, 10, 100, 150, -3, 200);

// console.log(Math.max(4, 7, 8, 10, 100, 150, -3, 200, "Number"));

// document.querySelector(".pienas").addEventListener("click", () => {
//   alert("Neliesti");
// });

function callBaackFunction(message, callback) {
  console.log(message);
  callback();
}

callBaackFunction("Labas pasauli", () => {
  console.log("Finkcijos pabaiga");
});

callBaackFunction("Labas pasauli", () => {
  console.log("Dar ne pabaiga pabaiga");
});

function recursion(value) {
  console.log("value: " + value);
  if (value < 10) {
    recursion(value + 1);
  }
}

recursion(4);

function factorial(n) {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(4));

function countAverage(...marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  let avg = sum / marks.length;
  return avg;
}

console.log(countAverage(4, 7, 9, 10));

const arr = [4, 7, 8, 9, 2, 1, 5, 10, 9, 7];

if (arr.length > 6) {
  countAvg(arr, divideByTwo);
} else {
  countAvg(arr, multiplyByTwo);
}

function divideByTwo(array) {
  for (let index in array) {
    array[index] /= 2;
  }
  return array;
}
function multiplyByTwo(array) {
  for (let index in array) {
    array[index] *= 2;
  }
  return array;
}

function countAvg(array, callback) {
  if (typeof array !== "object") return 0;
  const resultArray = callback(array);
  let sum = 0;
  for (let value of resultArray) {
    sum += value;
  }
  let avg = sum / resultArray.length;
  console.log(avg);
}
