import React from 'react';
import './App.css';
import FluenceMap from './FluenceMap.js'


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
            </p>
        </div>
        <div className='center'>
          <FluenceMap matrix={getRandomMatrix(5,5)} />
        </div>
      </div>
    )
  }   
}

export default App;
