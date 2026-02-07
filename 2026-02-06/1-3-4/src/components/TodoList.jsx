import { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) {
      alert("할 일을 입력하세요!");
      return;
    }

    const newTodo = { id: Date.now(), text };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <section className="card">
      <h2 className="title">Todo List</h2>

      <div className="inputRow">
        <input
          className="input"
          value={input}
          placeholder="할 일을 입력하세요"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button className="btn" onClick={addTodo}>
          추가
        </button>
      </div>

      <ul className="list">
        {todos.map((todo) => (
          <li className="item" key={todo.id}>
            <span className="text">{todo.text}</span>
            <button className="btn danger" onClick={() => deleteTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
