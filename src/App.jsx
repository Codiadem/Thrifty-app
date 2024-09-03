import React from "react";
import Home from "./Components/Pages/Home";
import SignupPage from "./Components/Pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";
import ForgotPassword from "./Components/Pages/ForgotPassword";
import ExpenseList from "./Components/Pages/ExpenseList";
import AddTransaction from "./Components/Pages/AddTransaction";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<ExpenseList />} />
          <Route path="/add-transaction" element={<AddTransaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
