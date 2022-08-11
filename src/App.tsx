import "./App.css";
import Home from "./components/Home";

const items = ["Spider-man", "SuperMan", "Batman"];

function App() {
  return (
    <div className="App">
      <Home items={items} />
    </div>
  );
}

export default App;
