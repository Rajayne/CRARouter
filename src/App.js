import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/eat" element={<Eat />} />
          <Route exact path="/drink" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
