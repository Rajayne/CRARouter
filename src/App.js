import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./NavBar";
import VendingMachine from "./VendingMachine";
import CandyBar from "./CandyBar";
import Chips from "./Chips";
import IcedTea from "./IcedTea";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/candybar" element={<CandyBar />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/icedtea" element={<IcedTea />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
