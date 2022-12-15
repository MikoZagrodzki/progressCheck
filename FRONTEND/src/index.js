import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeProvider } from "./Components/DarkModeContext.js";
import { UseEffectTriggerProvider } from "./Components/UseEffectTrigger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <UseEffectTriggerProvider>
      <App />
      </UseEffectTriggerProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
