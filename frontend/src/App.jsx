import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Jeu from "./pages/Jeu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Jeu" element={<Jeu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Equipe" element={<Equipe />} />
      </Routes>
    </div>
  );
}

export default App;
