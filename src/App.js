import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MenuList from "./Components/MenuList/MenuList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Nice menu</h1>
      <MenuList />
    </div>
  );
}

export default App;
