import "./App.css";
import "./style.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/team/CardList";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <CardList />
    </div>
  );
}

export default App;
