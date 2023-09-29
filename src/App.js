import React from 'react';
import './App.css';
import FluenceMap from './FluenceMap.js'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

const algorithms = [
  { value: 'bortfeld', label: 'Bortfeld Algorithm' },
  { value: 'engel', label: 'Engel Algorithm' },
  { value: 'gra', label: 'GRA-SRA' }
]

function getRandomMatrix(rows, cols) {
  const matrix = [];
  
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const randomNum = Math.floor(Math.random() * 10); // Generates random number from 0 to 9
      row.push(randomNum);
    }
    matrix.push(row);
  }

  return matrix;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: getRandomMatrix(5,5),
      selectedAlgorithm: '',
    };
  }

  regenerateMatrix = () => {
    this.setState({matrix: getRandomMatrix(5,5)});
  };

  selectAlgorithm = (event) => {
    this.setState({selectedAlgorithm: event.target.value});
  }

  solve = () => {
    console.log(this.state.selectedAlgorithm);
  }

  render() {
    return (
      <div>
        <div className='introduction'>
          <h1>Leaf Sequencing Problem in IMRT</h1>
            <p>
              In Intensity-Modulated Radiation Therapy (IMRT), the goal is to
              deliver the highest possible radiation dose to the tumor while
              minimizing the dose to surrounding healthy tissue. One way to
              achieve this is by using collimators with leaf pairs that can move
              independently to shape the radiation beam. The leaf sequencing
              problem is the task of determining the optimal sequence of leaf
              movements to achieve a desired radiation intensity profile.

              The prescribed dosis for an application can be represented as
              a matrix - called fluence map. Algorithms for this problem should 
              decompose this matrix in 0-1 segments in which the ones in each row
              are consecutive.
            </p>
            <p>
              Choose any algorithm e click below to solve the leaf sequencing problem.
            </p>

        </div>
        <div className='container'>
            <FluenceMap matrix={this.state.matrix} />
            {/* <button className='button' onClick={this.regenerateMatrix}>
              Regenerate matrix
            </button> */}
            <div align='right' className='button'>
              <Button variant="outline-dark" onClick={this.regenerateMatrix}>Regenerate Matrix</Button>
            </div>
            <div className='select'>
              <Form.Select
                onChange={this.selectAlgorithm}
                value={this.state.selectedOption}
              >
                <option selected>Select an algorithm...</option>
                <option value="bortfeld">Bortfeld Algorithm</option>
                <option value="engel">Engel Algorithm</option>
                <option value="gra">GRA-SRA</option>
              </Form.Select>
            </div>
            <div align='right' className='button'>
              <Button variant="outline-dark" onClick={this.solve}>Solve!</Button>
            </div>
        </div>
      </div>
    )
  }   
}

export default App;
