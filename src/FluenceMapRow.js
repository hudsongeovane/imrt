import React from 'react';
import Cell from './Cell.js'
import './FluenceMapRow.css';

class FluenceMapRow extends React.Component {
    getCells(row) {
        var cells = []
        for(var i=0; i < row.length; i++) {
            cells.push(<Cell number={this.props.row[i]} />)
        }
        console.log(cells)
        return cells
    }

    render() {
        return (
            <div>
                {this.getCells(this.props.row)}
                <div className="clear" /> 
            </div>
        );
    }
}

export default FluenceMapRow;