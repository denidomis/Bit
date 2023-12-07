const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

subtract.addEventListener("click", function () {
  count.innerHTML--;
});

reset.addEventListener("click", function () {
  count.innerHTML = 0;
});

add.addEventListener("click", function () {
  count.innerHTML++;
});
