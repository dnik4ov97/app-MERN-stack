import React from "react";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import Button from "./Button/Button";
import ButtonRun from "./ButtonRun/ButtonRun";
import './Header.css'

function Header(){

    const arrSpeed = ["Slow", "Normal", "Fast"]

    return (
        <div className="header">
            {/* Title of the Application */}
            <h2 className="title">Pathfinding Visualizer</h2>
            
            {/* Algorithms Dropdown Menu Button */}
            <DropdownMenu name="Algorithms" id="algorithms"></DropdownMenu>

            {/* Mazes & Patterns Dropdown Menu Button */}
            <DropdownMenu name="Mazes & Patterns" id="mazesandpatterns"></DropdownMenu>

            {/* Add Bomb Button */}
            <Button name="Add Bomb"></Button>

            {/* Visualize Button Run */}
            <ButtonRun name="Visualize"></ButtonRun>

            {/* Clear Board Button */}
            <Button name="Clear Board"></Button>

            {/* Clear Walls & Weights Button */}
            <Button name="Clear Walls & Weights"></Button>

            {/* Clear Path Button */}
            <Button name="Clear Path"></Button>

            {/* Speed Dropdown Menu */}
            <DropdownMenu name="Speed" id="speed" content={arrSpeed}></DropdownMenu>

        </div>
    );
}

export default Header;