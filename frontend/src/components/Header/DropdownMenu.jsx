import React from 'react'
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
                <button>Link 1</button>
                <button>Link 2</button>
                <button>Link 3</button>

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