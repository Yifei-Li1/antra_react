
import './App.css';
import MultiRangeSlider from './components/multiRangeSlider';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <Slider size={'big'} rangeSelector={true} color={'pink'} min={0} max={1000} step={10} mark={700} />
    
    </>
  );
}

export default App;
