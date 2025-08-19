import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("⚠️ Todo cannot be empty!");
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-12 flex items-center justify-center gap-4"
    >
      <input
        type="text"
        className="w-80 bg-gray-900 rounded-2xl border border-gray-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-200 py-3 px-5 shadow-md transition duration-200 ease-in-out placeholder-gray-400"
        placeholder="✍️ Write your todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 py-3 px-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-400 transition duration-300 text-lg font-semibold"
      >
        ➕ Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
