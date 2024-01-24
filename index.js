// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'projectName',
    message: 'What is the name of the project?',
  },
  {
    type: 'input',
    name: 'projectMotivation',
    message: 'What drove you to create this project?',
  },
  {
    type: 'input',
    name: 'projectProblem',
    message: 'What problem is this project designed to solve?',
  },
  {
    type: 'input',
    name: 'skillsAcquired',
    message: 'What knowledge or skills did you acquire during the development of this project?',
  },
  {
    type: 'input',
    name: 'installationsRequired',
    message: 'What installations were required to complete this project?',
  },
  {
    type: 'list',
    name: 'projectLicenses',
    message: 'Does the project have any licenses?',
    choices: [
        "MIT", "BSD", "Apache", "None"
    ]
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who were the contributors?',
  },
  {
    type: 'input',
    name: 'applicationWebsite',
    message: 'What is the application\'s website?',
  },
  {
    type: 'input',
    name: 'githubProfile',
    message: 'What is your Github profile?',
  },
            ];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

// TODO: Create a function to initialize app
function init() {
            
    inquirer.prompt(questions).then((answers) => {
        // Generate Markdown based on users info
        const markdownContent = generateMarkdown(answers);
    
        // Write the generated Markdown to README.md
        writeToFile('README.md', markdownContent);
      });
     };
        


// Function call to initialize app
init();
