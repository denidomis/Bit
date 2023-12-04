function testAnswer() {
  let checkbox = document.getElementById("answer1");
  let answer1 = checkbox.checked;

  let checkbox2 = document.getElementById("answer2");
  let answer2 = checkbox2.checked;

  let checkbox3 = document.getElementById("answer3");
  let answer3 = checkbox3.checked;

  let checkbox4 = document.getElementById("answer4");
  let answer4 = checkbox4.checked;

  let checkbox5 = document.getElementById("answer5");
  let answer5 = checkbox5.checked;

  let correctAnswers = 0;

  if (answer1) {
    correctAnswers++;
  }
  if (answer2) {
    correctAnswers++;
  }
  if (answer3) {
    correctAnswers++;
  }
  if (answer4) {
    correctAnswers++;
  }
  if (answer5) {
    correctAnswers++;
  }

  console.log(correctAnswers);

  let rez = document.getElementById("rez");
  rez.textContent = `Atsakėte ${correctAnswers} klausimus iš 5`;
}
