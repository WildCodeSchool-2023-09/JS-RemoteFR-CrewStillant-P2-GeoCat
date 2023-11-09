import "./App.css";
import Navbar from "./components/navbar/Navbar";
import GameTutorial from "./components/tutorial/GameTutorial";

function App() {
  return (
    <div className="container">
      <Navbar />
      <GameTutorial />
    </div>
  );
}

export default App;
