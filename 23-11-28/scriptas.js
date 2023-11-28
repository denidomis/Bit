// let x = 10;

// console.log(x);

// //aritmetiniai operatoriai + - * / % (liekanos operarotius)
// x = x % 3;

// console.log(x);

// x += 5;

// console.log(x);

// console.log(typeof x);

let firstName = "Justinas";
let lastName = "Krutikovas";
let bDate = 1999;
const d = new Date();

if (firstName.length > lastName.length) {
  document.write("<br>" + lastName);
} else {
  document.write("<br>" + firstName);
}

let year = d.getUTCFullYear();
let age = Math.abs(year - bDate);

document.write(
  "<br>" +
    "Aš esu " +
    firstName +
    " " +
    lastName +
    ". Man yra " +
    age +
    " metai(ų)"
);

let initials = firstName.charAt(0) + lastName.charAt(0);

document.write("<br>" + initials);

let lastthree;

lastthree = firstName.slice(-3) + lastName.slice(-3);

document.write("<br>" + lastthree);

let date = new Date(2009, 10, 10);

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.write("<br>" + "The current month is " + monthNames[date.getMonth()]);
