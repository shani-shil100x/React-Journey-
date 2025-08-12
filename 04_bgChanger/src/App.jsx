import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap fixed justify-center items-center bottom-11 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center items-center  gap-3 shadow-lg bg-slate-300 rounded-2xl px-4 py-3">
            <button
              onClick={() => setColor("red")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>

            <button
              onClick={() => setColor("blue")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>

            <button
              onClick={() => setColor("green")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "green" }}
            >
              GREEN
            </button>

            <button
              onClick={() => setColor("purple")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "purple" }}
            >
              PURPLE
            </button>

            <button
              onClick={() => setColor("orange")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "orange" }}
            >
              ORANGE
            </button>

            <button
              onClick={() => setColor("cyan")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "cyan" }}
            >
              CYAN
            </button>

            <button
              onClick={() => setColor("magenta")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "magenta" }}
            >
              MAGENTA
            </button>

            <button
              onClick={() => setColor("teal")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "teal" }}
            >
              TEAL
            </button>

            <button
              onClick={() => setColor("indigo")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "indigo" }}
            >
              INDIGO
            </button>

            <button
              onClick={() => setColor("maroon")}
              className="px-4 py-1 rounded-xl text-[0.8rem] font-bold"
              style={{ backgroundColor: "maroon" }}
            >
              MAROON
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
