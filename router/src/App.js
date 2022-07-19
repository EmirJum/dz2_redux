import './App.css';
import TourList from './components/TourList'
import {useState} from 'react';
import Regime from './components/regime/Regime';
import Footer from './components/footer/Footer';


function App() {
  const [mode, setMode] = useState({current:"day"})
  
  return (
  <div className="App">
    <Regime mode={mode} changeMode = {setMode}/>
    <TourList mode={mode}/>
    <Footer mode={mode}/>
  </div>
      
  )
}

export default App;