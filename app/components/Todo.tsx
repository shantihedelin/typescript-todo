"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-6xl">Todo List</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="h-16 w-56"
        />
        <button onClick={addTodo} className="h-16 w-16 rounded-full border shadow-xl bg-blue-300">
          Add
        </button>
      </div>

      <ul className="m-0 p-0 pt-6">
        {todos.map((todo) => (
          <li
          className="list-none bg-blue-300"
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button className="bg-white"  onClick={() => toggleTodo(todo.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
