# 📘 Todo Context API Example

This project demonstrates how to use **React Context API** to manage a Todo app's state (add, update, delete, toggle).

---

## 🚀 Features

- Global state management using Context API
- Todos with `add`, `update`, `delete`, `toggle complete`
- Clean and minimal setup

---

## 📂 Code with Comments

### 1. `TodoContext.jsx`

```jsx
// Importing hooks from React
import { useContext, createContext } from "react";

// Creating context with default structure
// (Todos array + functions for add, update, delete, toggle)
export const TodoContext = createContext({
  Todos: [
    {
      id: 1,
      todo: "Todo message", // Default todo text
      completed: false, // Default todo state (not completed)
    },
  ],
  addTodo: (todo) => {}, // Function to add todo
  updateTodo: (id, todo) => {}, // Function to update todo
  deleteTodo: (id) => {}, // Function to delete todo
  toggleComplete: (id) => {}, // Function to toggle completion
});

// Custom hook to use TodoContext easily
export const useTodo = () => {
  return useContext(TodoContext);
};

// Exporting the Provider so it can wrap App
export const TodoProvider = TodoContext.Provider;
```

---

### 🔄 Flow of Code

1. `createContext` → Makes a **global store** with default values.
2. `useTodo` → Custom hook for consuming context in any component.
3. `TodoProvider` → Wraps the app so that all child components can access todos + actions.

---

## 🛠️ Usage Example

```jsx
import React, { useState } from "react";
import { TodoProvider, useTodo } from "./contexts/TodoContext";

// TodoForm component to add todos
function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo({ id: Date.now(), todo: text, completed: false });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

// Main App component
function App() {
  const [todos, setTodos] = useState([]);

  // Functions for context
  const addTodo = (todo) => setTodos((prev) => [...prev, todo]);
  const updateTodo = (id, newTodo) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? newTodo : t)));
  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  return (
    <TodoProvider
      value={{ Todos: todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <h1>Todo App</h1>
      <TodoForm />
    </TodoProvider>
  );
}

export default App;
```

---

## 🎯 One-Line Explanation

**"TodoContext provides global functions and state → Components use them with `useTodo` → State updates everywhere without prop drilling!"**
