import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/homepage">
          <Route path="/" element={<Homepage />} />
        </Route>
        {/* <Route path="/narwhal">
              <Narwhal />
            </Route>
            <Route path="/whale">
              <Whale />
            </Route> */}
        <Route path="/">
          <App />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
