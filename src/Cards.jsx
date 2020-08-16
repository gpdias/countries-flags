import React from "react"


function Cards(props) {
    return (
    <div>
        <h3>{props.name}</h3>
        <img className = "Flags" src={props.flag} alt="flag_img" />
    </div>
    )}

export default Cards;