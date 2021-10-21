const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        // Validate user inout to check if it is a value before continuing to next question
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "desc",
        message: "Please provide a short description of your project",
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "insallation",
        message: "How do want to install your app?",
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "input",
        name: "instructions",
        message: "How do you use your app?",
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "list",
        name: "license",
        message: "What license should your project have?",
        choices: [
            'MIT', 'Apache', 'Boost', 'BSD'
        ], 
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    },
    {
        type: "input",
        name: "gitHub",
        message: "Whats is your GitHub username?",
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    }, 
    {
        type: "input",
        name: "email",
        message: "Whats is your email?",
        valiidate: (value) =>{ if(value) {return true} else {return 'Please enter value to continue'}},
    }, 
] 

// TODO: Create a function to write README file
// function createReadme(answers){
//     const template = `# ${answers.title}
// # Description
// ${answers.desc}

// # License
// ![alt](url)
// ${answers.license} 

// `;
// }



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
