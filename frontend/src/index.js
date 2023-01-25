import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import rootReducer from "./redux/reducers/rootReducer";
// import { createStore } from "redux";
// import thunk from "redux-thunk";
// import { Provider } from "react";

// const store = createStore(rootReducer, thunk);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
