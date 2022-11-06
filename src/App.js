import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./Router";

const App = () => {
  return (
    <div className="main-app">
      <div className="navbar" style={{zIndex:"3"}}>
        <Navbar/>
      </div>
      <div className="router">
        <Router />
      </div>
    </div>
  );
};

export default App;
