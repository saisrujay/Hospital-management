import './App.css';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {Router,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
