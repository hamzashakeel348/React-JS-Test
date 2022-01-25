import React from "react";
import "./App.css";
import SignUp from "./Components/SignUp/SignUp";
import Wallet from "./Components/Wallet/Wallet";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" element={<Wallet />} />
    </Router>
    // <Wallet></Wallet>;
  );
}

export default App;
