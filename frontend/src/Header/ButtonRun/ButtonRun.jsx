import React from "react";
import './ButtonRun.css'

function ButtonRun(props){
    return (
        <button className="buttonRun">
            {props.name}
        </button>
    );
}

export default ButtonRun;