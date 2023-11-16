import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./style.css";
import "leaflet/dist/leaflet.css";
import { RemainingProvider } from "./contexts/RemainingTriesContext";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <RemainingProvider>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </RemainingProvider>
  );
}
export default App;
