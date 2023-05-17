import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Eat from "./Eat";
import Drink from "./Drink";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <nav className="navbar-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/eat">
            Eat
          </Link>
          <Link className="link" to="/drink">
            Drink
          </Link>
        </nav>
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
