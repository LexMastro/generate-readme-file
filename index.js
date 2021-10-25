const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        // Validate user inout to check if it is a value before continuing to next question
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "desc",
        message: "Please provide a short description of your project",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "installation",
        message: "How do want to install your app?",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "input",
        name: "usage",
        message: "How do you use your app?",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "input",
        name: "contributors",
        message: "Who contributed on this project?",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "list",
        name: "license",
        message: "What license should your project have?",
        choices: [
            'MIT', 'Apache', 'BSL-1.0', 'BSD-3-Clause'
        ], 
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "gitHub",
        message: "Whats is your GitHub username?",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "input",
        name: "email",
        message: "Whats is your email?",
        validate: (value) =>{ if(value !== "") {return true} else {return 'Please enter value to continue'}},
    }, 
] 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {

    const readme = generateMarkdown(answers);
    console.log(readme)
    const fileName = "README.md"
    const outputPath = path.join(__dirname, 'output')

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, 0744);
    }

    const filePath = path.join(outputPath, fileName)

    fs.writeFileSync(filePath, readme, (err) =>
    err ? console.log(err) : console.log(`Successfully created ${fileName}!`)  
        )
    });
 };

// Function call to initialize app
init();
