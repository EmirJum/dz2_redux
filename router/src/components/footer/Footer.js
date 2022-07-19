import React from 'react';
import TourDig from '../TourDig';
import {useState, useEffect} from 'react' 
import axios from 'axios';


export default function Footer ({mode}) {
  const [tours, setTours] = useState([]);

  function getData(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => setTours(response.data))
  }
  useEffect(getData,[])

  function items(element, index) {
    return <TourDig key={index} tourName={element.name}/>
  }

  const style = {
    day: {
      color: "black",
      backgroundColor: "white"
    },
    night: {
      color: "white",
      backgroundColor: "black"
    }
  }
  const currentStyle = mode.current === "day" ? style.day : style.night

  return (
    <div style={currentStyle}>
      <h2>Футер</h2>
      <ul className='footer'>
        {tours.map(items)}
      </ul>
    </div>
  )
}