import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex flex-col p-5 gap-4 justify-center items-center">
      <h2 className="">Login</h2>
      <input
        className="border border-red-500 rounded-sm px-3 py-1"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        className="border border-red-500 rounded-sm px-3 py-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="password"
      />
      <button
        className="outline-none bg-red-600 py-2 px-4 rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
