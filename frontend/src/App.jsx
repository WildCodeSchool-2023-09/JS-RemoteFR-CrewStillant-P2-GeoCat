import "./App.css";
import "./style.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Markers />

    </div>
  );
}

export default App;
