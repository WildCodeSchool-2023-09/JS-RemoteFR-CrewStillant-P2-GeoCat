import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/team/CardList";

function App() {
  return (
    <div className="container">
      <Navbar />
      <CardList />
    </div>
  );
}

export default App;
