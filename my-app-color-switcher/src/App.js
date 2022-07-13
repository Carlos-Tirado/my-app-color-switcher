
import React, { useState } from 'react'
// importamos funcion creada en ColorChangeButton.js
import ColorChangeButton from './ColorChangeButton'
import './App.css';

function App() {
      const [color, setColor] = useState("")
      return (
  //next line className gives the page background color// //line with div className centered to center content in the page//
  <div className={"react-root " + color}> 
      <div className="centered"> 
        <h1>Color Picker</h1>
        <ColorChangeButton color="red" setColor={setColor}/>
        <ColorChangeButton color="blue" setColor={setColor}/>
        <ColorChangeButton color="yellow" setColor={setColor}/>
        <button className="red" onClick={() => setColor("red")}>red</button>
        <button className="blue" onClick={() => setColor("blue")}>blue</button>
        <button className="yellow" onClick={() => setColor("yellow")}>yellow</button>
      </div>
    </div>
  )
  }

export default App;
