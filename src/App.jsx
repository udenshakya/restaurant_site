import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";


function App() {
  return (
    <div className="app">
        <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={ <Menu />} />
        </Routes>
      </Router>
        </div>
  );
}

export default App;
