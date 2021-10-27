import React from "react";
import '../../styles/components/buttonRun.css'

function ButtonRun(props){
    return (
        <button className="buttonRun">
            {props.name}
        </button>
    );
}

export default ButtonRun;