import TourDig from './TourDig'
import {useState, useEffect} from 'react' 
import axios from 'axios';

export default function TourList ({mode}) {
  const [tours, setTours] = useState([]);

  function getData(){
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  // .then(response => response.json())
  // .then(info => {
  //   setTours(info)
  // })

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => setTours(response.data))
  }
  useEffect(getData,[])

  function items(element, index) {
    return <TourDig key={index} tourName={element.userId}/>
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
      <h2>Список туров:</h2>
      <ul>
        {tours.map(items)}
      </ul>
    </div>
  )
}