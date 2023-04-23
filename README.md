# IMRT - Leaf Sequencing

This project aims to solve the leaf sequencing problem in Intensity-Modulated Radiation Therapy (IMRT) using different algorithms.

## Introduction

IMRT is a radiation therapy technique that delivers radiation doses to cancerous tumors while minimizing the radiation exposure of the surrounding healthy tissues. The technique uses a linear accelerator (linac) with a multileaf collimator (MLC) to modulate the intensity of the radiation beam. The MLC is composed of two sets of thin, high-density metal leaves that can be moved independently, allowing the radiation beam to be shaped and modulated.

One of the main challenges in IMRT is to determine the optimal configuration of the MLC leaves for each beam direction, in order to achieve the desired dose distribution in the tumor while minimizing the exposure of the surrounding healthy tissues. This problem is known as the leaf sequencing problem.

## Algorithms

This project includes different algorithms to solve the leaf sequencing problem, including:

- **Bortfeld Algorithm**: A simple heuristic algorithm that ...
- **Genetic algorithm**: A metaheuristic algorithm that evolves a population of leaf configurations using genetic operators such as selection, crossover, and mutation.
- **Simulated annealing**: A metaheuristic algorithm that mimics the physical process of annealing in metals to find the global minimum of a cost function. The algorithm starts with a random leaf configuration and iteratively moves to neighboring configurations with a probability that depends on the difference in cost between the current and new configurations.

## Usage

To use the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/imrt-leaf-sequencing.git`
2. Install the dependencies: `npm install`
3. Run the application: `npm start`
4. Select an algorithm from the dropdown menu.
5. Edit the fluence map matrix as needed.
6. Click the "Solve" button to run the selected algorithm and display the leaf configurations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

