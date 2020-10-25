import React from "react";
// import {Image} from "react-native";
// import Cycle from "./images/img_1.jpg"
import './styles/header.css'

// import photo from './images/img_3.jpg'

function Cards(props) {
    

console.log("props", props);



    return (

        <div>
        <a href = {props.link}>
        <div className= 'card'>
            <img src = {props.img} alt = {props.alt} />  
        </div>
        </a>
        </div>
    )
       
}

export default Cards;
