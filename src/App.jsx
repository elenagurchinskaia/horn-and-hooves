// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  // const [showAbout, setActiveTab] = useState(true);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
