fetch("https://dog.ceo/api/breeds/image/random").then((atsakymas) =>
  atsakymas
    .json()
    .then((atsakymas) => document.write(`<img src="${atsakymas.message}"/>`))
);

fetch("https://dog.ceo/api/breeds/list/all")
  .then((atsakymas) => atsakymas.json())
  .then((atsakymas) => console.log(atsakymas));
