const entryText = document.querySelector(".form__entry");
const addButton = document.querySelector(".form__button");
const wrapTasks = document.querySelector(".list");
const allTasksList = document.querySelector(".list__tasks");
const buttonClear = document.querySelector(".main__button");
const emptyText = document.querySelector(".list__emptyText");

function addTasks() {
  // wrapTasks.innerHTML += entryText.value;
  const createLi = document.createElement("li");

  createLi.innerHTML += entryText.value + " " + '<input type="checkbox">';
  allTasksList.append(createLi);
}

addButton.addEventListener("click", addTasks);
addButton.addEventListener("click", textInput);
buttonClear.addEventListener("click", deleteTasks);
addButton.disabled = true;
entryText.oninput = function () {
  if (entryText.value.length <= 0) {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
};
/* функция для активации кнопки, которая не сработала*/
// function fullField() {
//   if (wrapTasks.textContent.trim().length > 0) {
//     buttonClear.disabled = false;
//   } else {
//     buttonClear.disabled = true;
//   }
// }
// fullField();
// console.log(wrapTasks.textContent.trim().length);

function textInput() {
  entryText.value = "";
  emptyText.style.display = "none";
}
function deleteTasks() {
  allTasksList.innerHTML = "";
  emptyText.style.display = "block";
}

console.log(wrapTasks.innerHTML.includes("li"));
