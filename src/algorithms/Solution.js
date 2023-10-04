import FluenceMap from '../FluenceMap.js'
import Sum from '../Sum.js'
import React from 'react';

class Solution  extends React.Component {
    buildMatrix(coefficent, segment, m, n) {
        let matrix = [];
        for(let i = 0; i < m; i++) {
            matrix[i] = [];
            for(let j = 0; j < n; j++) {
                if (j >= segment[i][0] && j <= segment[i][1]) {
                    matrix[i].push(coefficent);
                }
                else {
                    matrix[i].push(0);
                }
            }
        }
        return matrix;
    }

    render() {
        if (this.props.coefficients.length === 0) {
            return (
                <div/>
            );
        }
        let operations = [];
        for(let i = 0; i < this.props.coefficients.length; i++) {
            operations.push(
                <FluenceMap matrix={this.buildMatrix(
                    this.props.coefficients[i],
                    this.props.segments[i],
                    this.props.m,
                    this.props.n
                )} isSegment={true} />
            );
            if (i < this.props.coefficients.length-1) {
                operations.push(<Sum />);
            }
        }
        return (
            <div className='solution'>
                {operations}
            </div>
        );
    }
}

export default Solution;