const p = document.querySelector("p");
const btn = document.querySelector("button");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJoke);

function getJoke() {
  fetch(url)
    .then((res) => res.json())
    .then(data);

  function data(data) {
    p.innerHTML = data.value;
  }
}
