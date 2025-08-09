import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return <h2>Code with coffe !</h2>;
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

let username = "Kuze Lal";
const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me to see your future",
  username
);
createRoot(document.getElementById("root")).render(reactElement);
// createRoot(document.getElementById("root")).render(<App />);
