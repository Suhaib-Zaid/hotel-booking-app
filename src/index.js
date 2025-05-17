import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.className = savedTheme;
}, []);
