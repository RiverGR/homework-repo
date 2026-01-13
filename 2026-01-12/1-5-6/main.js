// 입력창, 버튼, 리스트 요소 선택
const input = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const list = document.querySelector("#todo-list");

// localStorage 키와 할 일 배열
const STORAGE_KEY = "todos";
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

// 할 일 저장
const saveTodos = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

// 화면에 할 일 목록 렌더링
const renderTodos = () => {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    // 개별 할 일 삭제
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

// 할 일 추가
const addTodo = () => {
  const value = input.value.trim();
  if (!value) return;

  todos.push(value);
  saveTodos();
  renderTodos();

  input.value = "";
  input.focus();
};

// 전체 할 일 삭제
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

// 처음 화면에 목록 표시
renderTodos();

// 버튼 및 키보드 이벤트
addBtn.addEventListener("click", addTodo);
clearBtn.addEventListener("click", clearTodos);
input.addEventListener("keydown", (e) => e.key === "Enter" && addTodo());
