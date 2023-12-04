function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

while (true) {
  let coin = rand(0, 1);

  if (coin === 0) {
    console.log("H");
    break;
  } else {
    console.log("S");
  }
}

console.log("Antra Užduotis");

let heads = 0;

while (true) {
  let coin = rand(0, 1);

  if (coin === 0) {
    console.log("H");
    heads++;

    if (heads === 3) {
      console.log("HHH");
      break;
    }
  } else {
    console.log("S");
  }
}

console.log("Trečia užduotis");

let headsRow = 0;

while (headsRow < 3) {
  let coin = rand(0, 1);

  if (coin === 0) {
    console.log("H");
    headsRow++;
  } else {
    console.log("S");
    headsRow = 0;
  }
}

console.log("Heads 3x");

document.write("<p>");

for (let black = 0; black < 10; black++) {
  for (let red = 0; red < 10; red++) {
    if (black === red) {
      document.write('<span class="red">*</span>');
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}

document.write("</p>");
