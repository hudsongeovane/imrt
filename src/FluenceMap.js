import React from 'react';
import FluenceMapRow from './FluenceMapRow.js'

class FluenceMap extends React.Component {
    getRows(rows) {
        var cells = []
        for(var i=0; i < rows.length; i++) {
            cells.push(
                <FluenceMapRow
                    row={this.props.matrix[i]}
                    isSegment={this.props.isSegment}
                />
            )
        }
        return cells
    }

    render() {
        return (
            <div className='fluencemap'>
                {this.getRows(this.props.matrix)}
            </div>
        );
    }
}

export default FluenceMap;