# 📘 Redux Toolkit Basics

Redux Toolkit (RTK) is the **official, recommended way** to write Redux logic. It makes Redux simpler, less verbose, and less error-prone.

---

## 🚀 Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 🏗️ Store Setup

```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

### Provide Store

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

---

## ✨ Slice

A **slice** combines `state` + `reducers` + `actions`.

```js
// features/todo/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, title: "Learn Redux Toolkit" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), title: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

---

## 🛠️ Using Redux in Components

### Dispatch Actions

```jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
```

### Select State

```jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
```

---

## ✅ Key Takeaways

* Use `configureStore` instead of `createStore`.
* Use `createSlice` for reducers + actions.
* Use `useDispatch` to trigger actions.
* Use `useSelector` to access state.
* Use `createAsyncThunk` for API calls.

---

