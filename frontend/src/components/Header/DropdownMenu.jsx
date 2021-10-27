import React, {useState} from "react";
import '../../styles/components/dropDownMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function DropdownMenu(props){
    return (
        <div className="menu">
            <button onClick={() => menuShow(props.id)} className="menuBt">
                {props.name}
                <FontAwesomeIcon icon={faCaretDown} className="icon"/>
            </button>
            <div id = {props.id}  class="menu-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>

                {/* {props.content.map((value, index) => {
                    return (
                        <a href="#" key={index}>{value}</a>
                    )
                }) */}

                {/* } */}
            </div>
        </div>
        
    );
}

function menuShow (id) {
    document.getElementById(id).classList.toggle("show");
}

export default DropdownMenu;