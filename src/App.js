import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./screens/main";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <Main />
      </div>
    </div>
  );
}

export default App;
