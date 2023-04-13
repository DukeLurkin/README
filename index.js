// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use it?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What is the license?',
      name: 'license',
      choices:['MIT', 'Mozilla', 'Apache']
    },
    {
      type: 'input',
      message: 'Who is contributing?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What are the tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your Github Username?',
      name: 'question',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response);
    // const response = (response)
    cool(response);
        
  });

  // TODO: Create a function to write README file
function cool(response) {
  fs.writeFileSync("README.md", generateMarkdown(response), (err) =>
  err ? console.log(err) : console.log('Success!')
)}; 


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
