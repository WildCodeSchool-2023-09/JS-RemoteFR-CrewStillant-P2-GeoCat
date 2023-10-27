import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CardList from "./components/team/CardList";
import Form from "./components/contact/Form";

function App() {
  return (
    <div className="container">
      <Navbar />
      <CardList />
      <Form />
    </div>
  );
}

export default App;
