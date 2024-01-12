const billAmount = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const calculate = document.getElementById("calculate");
const finalTip = document.getElementById("finalTip");
const total = document.getElementById("total");
const tipAmount = 0;
const totalAmount = 0;

calculate.addEventListener("click", () => {
  event.preventDefault();
  showImage();
  const bill = +billAmount.value;
  const tip = +tipPercentage.value;
  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  finalTip.innerHTML = tipAmount;
  total.innerHTML = totalAmount;
});

function showImage() {
  const image = document.querySelector(".image-div");
  const coin = document.querySelector("#onTop");
  const fallingCoin = document.querySelector("#fallingCoin");
  const image2 = document.querySelector(".image-div2");
  const image3 = document.querySelector(".image-div3");
  setTimeout(() => {
    image.style.display = "block";
    coin.style.display = "block";
  }, 0);
  setTimeout(() => {
    coin.style.display = "none";
    image2.style.display = "block";
  }, 500);
  setTimeout(() => {
    image2.style.display = "none";
    image3.style.display = "block";
    fallingCoin.style.display = "block";
  }, 1000);
  setTimeout(() => {
    image.style.display = "none";
    fallingCoin.style.display = "none";
  }, 1500);
}
