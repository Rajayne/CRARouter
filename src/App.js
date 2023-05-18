import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import CandyBar from "./CandyBar";
import Chips from "./Chips";
import IcedTea from "./IcedTea";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route exact path="/candybar" element={<CandyBar />} />
        <Route exact path="/chips" element={<Chips />} />
        <Route exact path="/icedtea" element={<IcedTea />} />
      </Routes>
    </main>
  );
}

export default App;
