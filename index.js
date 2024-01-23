// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is the name of the project?", 
                "What drove you to create this project?",
                "What problem is this project designed to solve?", 
                "What knowledge or skills did you acquire during the development of this project?",
                "What installations were required to complete this project?",
                "Does the project have any licenses?",
                "Who were the contributors?",
                "What is the application's website?",
                "What is your Github profile?"
            ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
