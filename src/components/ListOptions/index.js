import React from "react";
import './style.css';


const ListOption = (props) => {
    return (
        <li {...props}>{props.children} {props.tiempo}</li>
    )
}

export default ListOption;