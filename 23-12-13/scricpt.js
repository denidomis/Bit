const height = document.querySelector(".height"),
  weight = document.querySelector(".weight"),
  calculate = document.querySelector(".btn"),
  result = document.querySelector(".results"),
  reset = document.querySelector(".reset");

calculate.addEventListener("click", calBMI);
reset.addEventListener("click", resetForm);

function calBMI(e) {
  e.preventDefault();

  let heightValue = height.value;
  let weightValue = weight.value;

  if (!heightValue || isNaN(heightValue)) {
    return alert("Provide a valid height");
  } else if (!weightValue || isNaN(weightValue)) {
    return alert("Provide a valid weight");
  } else {
    let heightValueM = heightValue / 100;
    let bmi = (weightValue / Math.pow(heightValueM, 2)).toFixed(2);

    if (bmi < 18.5) {
      showResults(`Underweight: <span>${bmi}</span>`, "orange");
      reset.hidden = false;
    }
    if (bmi > 18.5 && bmi < 25) {
      showResults(`Normal: <span>${bmi}</span>`, "green");
      reset.hidden = false;
    }
    if (bmi > 25 && bmi < 30) {
      showResults(`Overweight: <span>${bmi}</span>`, "yellow");
      reset.hidden = false;
    }
    if (bmi > 30) {
      showResults(`Obese: <span>${bmi}</span>`, "red");
      reset.hidden = false;
    }
  }
}

function showResults(value, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = value);
}

function resetForm() {
  location.reload();
}
