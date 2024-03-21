import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import SendMoney from "./Components/SendMoney";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/transfer" element={<SendMoney />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
