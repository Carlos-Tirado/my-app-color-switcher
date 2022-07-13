import React from "react"
// crear funcion para despues exportar a App.js

function ColorChangeButton(props) {
    return <button className={props.color} onClick={() => props.setColor(props.color)}>
        {props.color}
    </button>
}

export default ColorChangeButton