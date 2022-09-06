import logo from './logo.svg';
import React ,{useState} from "react";
import './App.css';

function App() {
    const [count,setCount]=useState(0);
    return(
    <div>
      <h1>You Click {count} Times</h1>
      <button  onClick={() => setCount(count + 1)} >Clicked</button>
    </div>);
}

export default App;
