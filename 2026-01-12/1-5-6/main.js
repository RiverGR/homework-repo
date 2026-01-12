const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const list = document.querySelector("#todo-list");

const STORAGE_KEY = "todos";
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const renderTodos = () => {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    deleteBtn.addEventListener("click", () => {
      const ok = confirm(`"${todo}" 항목을 삭제할까요?`);
      if (!ok) return;

      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.append(span, deleteBtn);
    list.appendChild(li);
  });
};

const addTodo = () => {
  const value = input.value.trim();
  if (!value) return;

  todos.push(value);
  saveTodos();
  renderTodos();

  input.value = "";
  input.focus();
};

const clearTodos = () => {
  if (todos.length === 0) {
    alert("삭제할 할 일이 없습니다.");
    return;
  }

  const ok = confirm("모든 할 일을 삭제할까요?");
  if (!ok) return;

  todos = [];
  saveTodos();
  renderTodos();
};

// 초기 렌더
renderTodos();

// 이벤트
addBtn.addEventListener("click", addTodo);
clearBtn.addEventListener("click", clearTodos);
input.addEventListener("keydown", (e) => e.key === "Enter" && addTodo());
