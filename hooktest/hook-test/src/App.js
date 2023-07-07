import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [counter,setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={()=>setCounter(prev=>prev + 1)}>increment</button>
    </>
  );
}

export default App;
