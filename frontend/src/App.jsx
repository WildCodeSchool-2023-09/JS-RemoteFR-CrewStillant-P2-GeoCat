import { Outlet } from "react-router-dom";
import "./App.css";
import "./style.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
  );
}
export default App;
