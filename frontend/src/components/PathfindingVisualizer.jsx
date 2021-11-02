// imported useState and useEffect because Hooks are used.
import React, { useState, useEffect } from 'react';
import '../styles/components/grid.css'
import '../styles/components/node.css'
import '../styles/layout/coordinate-text.css'

function PathfindingVisualizer() {

    // Initializing each constant variable
    const ROW_COUNT = 20;
    const COLUMN_COUNT = 60;

    // Intializing each state variable
    const [grid, setGrid] = useState([]);
    const [currRow, setCurrRow] = useState(0);
    const [currCol, setCurrCol] = useState(0);

    // Builds and sets the grid value
    useEffect(() => { setGrid(getGrid) }, []);

    function getGrid() {
        
        // Creates a node object with the passed in row and col values
        const node = (row, col) => { return { row, col } };

        // Creats an 2D initial grid object that stores a Node shell object into each (row, col)
        return Array.from(Array(ROW_COUNT)).map((_, rowIndex) => {
            return Array.from(Array(COLUMN_COUNT)).map((_, columnIndex) => {
                return node(rowIndex, columnIndex);
            })
        });
    }

    // Changes the currRow and currCol when a node is clicked on
    function handleClick(col, row) {
        setCurrRow(row);
        setCurrCol(col);
    };

    /*
        Itterate throuch every column in the row, insert a Node element into each column
        and then return the results as TableRow elements
    */
    const createTableRowElements = (row, rowIdx) => (<tr key={rowIdx}>{row.map(createNodeElement)}</tr>);

    // Generate a Node element
    const createNodeElement = node => {
        const { row, col } = node;
        return (
            <Node
                key={col}
                col={row}
                row={col}
                onClick={() => handleClick(col, row)}
            ></Node>
        );
    }

    // return elements that displays the Coordinates info div and the grid containing all of the Node elements 
    return (
        <div>
            <div className="coordinate">Coordinates: (col, row) ({currCol},{currRow})</div>
            <table className="grid-container" /* grid is put into a table */ >
                <tbody className="grid" /* no theader just tbody */>
                    {
                        // Itterate through each row and insert a Node element into each column
                        grid.map(createTableRowElements)
                    }
                </tbody>
            </table>
        </div>
    );
}

// Node function that returns a button with id, className, and onClick function
function Node(props) {
    const { col, row } = props;
    return (
        <button
            id={`node-${row}-${col}`}
            className="node"
            onClick={() => props.onClick()}
        ></button>
    );
}

// exports PathfindingVisualizer 
export default PathfindingVisualizer;
