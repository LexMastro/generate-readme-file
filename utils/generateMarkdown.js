// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = `https://img.shields.io/badge/License-${license}-blue`
  return `![${license}]()`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const template = `# ${answers.title}
# Description
${answers.desc}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Instrcutions](#instructions)
- [License](#license)

# Installation
${answers.desc}

# Instructions
${answers.desc}

## License
${renderLicenseLink(answers.license)}
`;
return template;
}

module.exports = generateMarkdown;
