import React, { useState, useEffect } from "react";
import logo from "../../images/logo-white-bg.png";
import "../../style/dash1.css";
import { Link, NavLink } from "react-router-dom";
import ExpenseTracker from "./Transaction";
import ProfilePicture from "../Layout/ProfilePicture";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

function Dashboard() {
  // dashboard header
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // transaction codes
  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : [];
  });

  // set user name
  const [userName, setUserName] = useState("");

  // Fetch user's name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // State for balance, income, and expense
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Calculate balance, income, and expense whenever transactions change
  useEffect(() => {
    if (!transactions || !Array.isArray(transactions)) return;

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        totalIncome += transaction.amount;
      } else {
        totalExpense += Math.abs(transaction.amount);
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);

    // Save updated transactions to localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <>
      <div className="dash-header">
        <NavLink to="/">
          <img src={logo} alt="Thrifty Logo" />
        </NavLink>

        <div className="menu-button">
          <nav className="navbar">
            <div
              className={`hamburger  ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className={isOpen ? "line open" : "line"}></div>
              <div className={isOpen ? "line open" : "line"}></div>
              <div className={isOpen ? "line open" : "line"}></div>
            </div>

            <ul className={isOpen ? "nav-links open" : "nav-links"}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="wrapper lg:mx-40 ">
        <div className="dash w-full flex flex-col md:flex-row pb-10 lg:f ">
          <div className="image w-full flex items-center justify-center lg:justify end">
            <ProfilePicture />
          </div>
          <div className="user-info w-full flex flex-col items-center justify-center">
            <span className="user-name whitespace-nowrap">
              Chioma Ekpemerechi
              {userName}
            </span>
            <p>
              Current Balance:{" "}
              <span className="money-balance whitespace-nowrap">{balance}</span>
            </p>
          </div>
        </div>
        <h3>This Week</h3>
        <div className="input">
          <div className="income-total">
            <p>Total Income</p>
            <p>{income}</p>
          </div>
          <div className="expense-total">
            <p>Total Expense</p>
            <p>{expense}</p>
          </div>
        </div>
        {/* ExpenseTracker Component: Pass setTransactions to manage transaction updates */}
        <ExpenseTracker
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </>
  );
}

export default Dashboard;
