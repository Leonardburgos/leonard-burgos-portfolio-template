import React from "react";
import { HashRouter as Router } from "react-router-dom"; // Using HashRouter
import { ToastContainer } from "react-toastify"; // For toasts
import Header from './pages/Header'; 
import RouterComponent from "./Router"; // Import your router component

function App() {
  return (
    <Router>
      {/* Apply the background directly to the app container */}
      <div className="min-h-screen bg-gradient-to-b from-[#eeeeee] to-[#ffffff] dark:from-[#212121] dark:to-[#ffffff] bg-[length:100%_7000%] bg-no-repeat">
        <ToastContainer />
        <Header />
        <RouterComponent /> {/* Use the Router component here */}
      </div>
    </Router>
  );
}

export default App;
