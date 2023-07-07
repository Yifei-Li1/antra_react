import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <Slider size={'big'} rangeSelector={true} color={'pink'} min={0} max={1000} step={10} mark={30} />
    
    </>
  );
}

export default App;
