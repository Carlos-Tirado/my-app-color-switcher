
import React, { useState } from 'react'
// importamos funcion creada en ColorChangeButton.js
import ColorChangeButton from './ColorChangeButton'
import './App.css';

function App() {
  const [color, setColor] = useState("")
  return (
// line 12 className gives the page background color// //line with div className centered to center content in the page// 
// line 14 creating buttons using JSX syntax//
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

//   function App() {
//     const [color, setColor] = useState("")
//     return React.createElement("div", {className: "react-root " + color},
//     <div className="centered"> 
//       <h1>Color Picker</h1> 
//       <ColorChangeButton color="red" setColor={setColor}/>
//       <ColorChangeButton color="blue" setColor={setColor}/>
//       <ColorChangeButton color="yellow" setColor={setColor}/>
//       </div>
  
//   );
// }

export default App;
