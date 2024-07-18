import React from "react";
<<<<<<< HEAD
import Home from "./Components/Pages/Home";
=======
import SignupPage from "./components/Pages/SignupPage";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
>>>>>>> 9bdb977edaf1cee83eeabcfc0d9a9f8fa8810502

function App() {
  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
      <Home />
=======
     
>>>>>>> 9263e64043ec3d019856af9418e80b83e489d8f3
=======
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
>>>>>>> 9bdb977edaf1cee83eeabcfc0d9a9f8fa8810502
    </>
  );
}

export default App;

