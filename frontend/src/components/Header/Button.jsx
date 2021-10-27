import React from "react";
import '../../styles/components/button.css'

function Button(props){
    return (
        <button className="button">
            {props.name}
        </button>
    );
}

export default Button;