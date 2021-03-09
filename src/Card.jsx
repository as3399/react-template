import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <div id="card">
            <div id="img"><img src={props.link}/></div>
            <h5 id="heading">{props.head}</h5>
            <p id="content">{props.data}</p>
            <button id="btn">Click Here</button>
        </div>
    );
}
export default Card;