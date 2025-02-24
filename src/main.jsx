import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Importar estilos globales
import "./App.css"; // Importar estilos navBar 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);