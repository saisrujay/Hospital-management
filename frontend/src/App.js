import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Details from "./Components/details";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;