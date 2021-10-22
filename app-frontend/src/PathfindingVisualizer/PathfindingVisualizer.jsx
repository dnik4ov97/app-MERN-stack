import React, {Component} from 'react';
// import Node from './Node/Node';

import './PathfindingVisualizer.css';

class Node extends React.Component {
    render() {
        const {col, row} = this.props;
        return (
            <button
                id={`node-${row}-${col}`}
                className={`node`}
                onClick={() => this.props.onClick()}
            ></button>
        );
    }
}

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [],
            ROW_COUNT: 25,
            COLUMN_COUNT: 35,
            currRow: 0,
            currCol: 0,
        }
    }

    handleClick(col, row) {
        this.setState({currCol: col});
        this.setState({currRow: row});
    }


    componentDidMount() {
        const grid = this.getInitialGrid();
        this.setState({grid});
    }

    getInitialGrid = (
        rowCount = this.state.ROW_COUNT,
        colCount = this.state.COLUMN_COUNT,
    ) => {
        const initialGrid = [];
        for (let row = 0; row < rowCount; row++) {
            const currentRow = [];
            for(let col = 0; col < colCount; col++) {
                currentRow.push(this.createNode(row, col));
            }
            initialGrid.push(currentRow);
        }
        return initialGrid;
    };

    createNode = (row , col) => {
        return {
            row, 
            col,
        };
    };

    render() {
        const {grid} = this.state;
        
        return (
            <div>
            <div className="coordinate">Pathfinding Visualizer</div>
                <div className="coordinate">Coordinates: (col, row) ({this.state.currCol},{this.state.currRow})</div>
                <table className="grid-container">
                    <tbody className="grid">
                       {grid.map((row, rowIdx) => {
                           return (
                               <tr key={rowIdx}>
                                   {row.map((node,nodeIdx) => {
                                       const {row, col} = node;
                                       return (
                                           <Node
                                            key={nodeIdx}
                                            col={col}
                                            row={row}
                                            onClick={() => this.handleClick(col, row)}
                                           ></Node>
                                       )
                                   })}
                               </tr>
                           )
                       })}
                    </tbody>
                </table>
            </div>
        );
    }
}