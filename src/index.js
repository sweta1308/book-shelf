import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import { SearchFilterProvider } from "./context/SearchFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider>
        <SearchFilterProvider>
          <App />
        </SearchFilterProvider>
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>
);
