import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTodos } from "./features/todo/todoSlice"; // create this action

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // ✅ Load from localStorage on app start
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      dispatch(setTodos(JSON.parse(savedTodos)));
    }
  }, [dispatch]);

  // ✅ Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <h1 className="text-center text-5xl font-extrabold text-gray-100 mt-16 drop-shadow-lg">
        Learn about <span className="text-teal-300">Redux Toolkit</span>
      </h1>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
