// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined) {
    throw new Error("License is required")
  }
  return `https://img.shields.io/badge/License-${license}-blue`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined) {
    throw new Error("License is required")
  }
  return `https://opensource.org/licenses/${license}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const template = `# ${answers.title}
![${licenseLink}](${badge})
## Description
${answers.desc}

## Table of Contents
- [Description](#description)
- [Demo](#demonstration)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Demontrastion
The following image demonstrates the application functionality:

![live demo](../Assets/Readme-demo.gif)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.gitHub}
${answers.contributors}

## Tests
\`\`\`bash
npm run test 
\`\`\`

## Questions
Any questions please email ${answers.email}

## License
This project is licensed under ${answers.license}.

`;

  return template;
}

module.exports = generateMarkdown;
