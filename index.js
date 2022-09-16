let input = document.querySelector(".input");
let addTodos = document.querySelector(".add");
let todos = document.querySelector(".todos");
let icon = document.querySelectorAll(".fa-solid");
let todoItems = document.querySelector(".todo-items");
let search = document.querySelector(".search");
let empty = document.getElementById('empty')
function createLi() {
  const newList = document.createElement("li");
  newList.innerHTML = input.value + `<i class="fa-solid fa-trash"></i>`;
  todos.appendChild(newList);
  newList.classList.add("todo-items");
}

addTodos.addEventListener("click", () => {
  if (input.value === "") {
    empty.style.display = 'block'
  }
  else{
    createLi();
    input.value = "";
  }
});

input.addEventListener('keyup',(e)=>{
   if(input.value.length >= 1){
    empty.style.display = 'none'
   }
})

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.remove();
  }
});
const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });
  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};

search.addEventListener("keyup", () => {
  let term = search.value.trim().toLowerCase();
  filterTodos(term);
});

