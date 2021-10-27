// imported useState and useEffect because Hooks are used.
import React, { useState, useEffect } from 'react';
import '../styles/components/grid.css'
import '../styles/components/node.css'
import '../styles/layout/coordinate-text.css'

// Node function that returns a button with id, className, and onClick function
function Node (props) {
    const {col, row} = props;
    return (
        <button
            id={`node-${row}-${col}`}
            className={`node`}
            onClick={() => props.onClick()}
        ></button>
    );
}

// main function that builds the whole component
function PathfindingVisualizer (props) {
    // intializing each state variable
    const [grid, setGrid] = useState([]);
    const [currRow, setCurrRow] = useState(0);
    const [currCol, setCurrCol] = useState(0);

    // initializing each constant variable
    const ROW_COUNT = 20;
    const COLUMN_COUNT = 60;

    // creats an 2D initial grid object that stores a Node object into each (row, col)
    function buildInitialGrid (){
        const initialGrid = [];
        for (let row = 0; row < ROW_COUNT; row++){
            const currentRow = [];
            for(let col = 0; col < COLUMN_COUNT; col++){
                currentRow.push(createNode(row, col))
            }
            initialGrid.push(currentRow);
        }
        return initialGrid;
    };

    // creates a Node object with the passed in row and col values
    const createNode = (row , col) => {
        return {
            row,
            col,
        };
    };

    // builds and sets the grid value
    useEffect(() => {
        const grid = buildInitialGrid();
        setGrid(grid);
    }, []);

    // changes the currRow and currCol when a node button is clicked
    function handleClick (col, row) {
        setCurrRow(row);
        setCurrCol(col);
    };

    // return elements that displays the Coordinates and the Grid 
    return (
        <div>
            <div className="coordinate">Coordinates: (col, row) ({currCol},{currRow})</div>
                {/* grid is put into a table */}
                <table className="grid-container">
                    {/* no theader just tbody */}
                    <tbody className="grid">
                        {/* going through each row in grid */}
                        {grid.map((row, rowIdx) => {
                            return (
                                <tr key={rowIdx}>
                                    {/* in each tr it goes through each node(col) in each row of the grid*/}
                                    {row.map((node,nodeIdx) => {
                                        const {row, col} = node;
                                        return (
                                            <Node
                                                key={nodeIdx}
                                                col={col}
                                                row={row}
                                                onClick={() => handleClick(col, row)}
                                            ></Node>
                                        )
                                    })}
                              </tr>
                           )
                        })}
                    </tbody>
                </table>
            <div></div>
        </div>
    );
}

// exports PathfindingVisualizer 
export default PathfindingVisualizer;