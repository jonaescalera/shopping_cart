import { Route, Routes, Link } from "react-router-dom";

import "./App.css";
import Detail from "./components/Detail";
import Help from "./components/help/Help";
import Home from "./components/home/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App" data-testid="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:movie_id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
