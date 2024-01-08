async function callToServer() {
  try {
    const promise = await fetch("http://localhost:3000/get-todos");
    const response = await promise.text();
    showtodos(JSON.parse(response));
  } catch (err) {}
}

function showtodos(todos) {
  const unorderedListElement = document.querySelector(".todos");
  let dynamicHTML = "";

  for (let todo of todos) {
    dynamicHTML += `<li>${todo.author} ${todo.todo}</li>`;
  }
  unorderedListElement.innerHTML = dynamicHTML;
}

callToServer();
