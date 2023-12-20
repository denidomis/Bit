const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  let inputVal = input.value;
  let len = inputVal.length;
  let start = inputVal.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = inputVal.substring(len - Math.floor(len / 2));

  let flip = end.split("").reverse().join("");
  //   let flip2 = [...end].reverse().join("");

  if (!/^[A-Za-z]+$/.test(inputVal)) {
    alert("Įveskite raides");
  } else if (start === flip) {
    result.innerHTML = `${inputVal.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${inputVal.toUpperCase()} is not a palindrome`;
  }
}
