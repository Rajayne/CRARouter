import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <div className="VendingMachine-container">
        <div className="VendingMachine-text">
          <p>Welcome to the Vending Machine.</p>
          <p> What can I get for you?</p>
        </div>
        <div>
          <div className="VendingMachine-links">
            <b>Available Snacks:</b>
            <Link className="VendingMachine-link" exact to="/candybar">
              Candy Bar
            </Link>{" "}
            <Link className="VendingMachine-link" exact to="/chips">
              Chips
            </Link>
            <Link className="VendingMachine-link" exact to="/icedtea">
              Iced Tea
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
