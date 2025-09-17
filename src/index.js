import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";  // ✅ Make sure the file is named styles.css inside src

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
