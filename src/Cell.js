import React from 'react';
import './Cell.css';

  

class Cell extends React.Component {
    getColor(value) {
        const colorNames = [
            "rgb(255, 255, 255)",
            "rgb(255, 230, 230)",
            "rgb(255, 192, 203)",
            "rgb(255, 182, 193)",
            "rgb(255, 160, 122)",
            "rgb(250, 128, 114)",
            "rgb(205, 92, 92)",
            "rgb(178, 34, 34)",
            "rgb(165, 42, 42)",
            "rgb(140, 30, 30)"
        ];
          
        return colorNames[value]
    }

    render() {  
        const divStyle = {
            backgroundColor: this.getColor(this.props.number),
        };

        return (
            <div
                style={divStyle}
                className="cell"
            >
                {this.props.number}
            </div>
        );
    }
}

export default Cell;