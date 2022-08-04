import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greetings="¡Bienvenidos!" />
  </React.StrictMode>
);

reportWebVitals();
