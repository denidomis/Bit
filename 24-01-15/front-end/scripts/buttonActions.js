const moveToDoneBtn = document.querySelector("#moveToDone"),
  moveToTodoBtn = document.querySelector("#moveToTodo"),
  deleteTodoBtn = document.querySelector("#deleteTodoBtn");

const moveTodoToDone = () => {
  const allTodosCheckedInput = document.querySelectorAll(
    ".all-todos .todo input:checked"
  );
  for (const inputElement of allTodosCheckedInput) {
    inputElement.checked = false;
    doneListElement.append(inputElement.parentElement);
  }
  console.log(allTodosCheckedInput);
};

const moveTodoToTodoList = () => {
  const allTodosCheckedInput = document.querySelectorAll(
    ".done-list .todo input:checked"
  );
  for (const inputElement of allTodosCheckedInput) {
    inputElement.checked = false;
    todoListElement.append(inputElement.parentElement);
  }
  console.log(allTodosCheckedInput);
};

moveToDoneBtn.onclick = moveTodoToDone;
moveToTodoBtn.onclick = moveTodoToTodoList;
