// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./Utilities/generateMarkdown.js');

const generateREADME = ({ title, description, installation, usage, email, github, tests }) =>
    `# ${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions and Contributing](#questions-and-contributing)
- [Tests](#tests)

## Installation

${installation}

## Usage

${usage}

${markdown.renderLicenseSection()}

## Questions and Contributing

If you have any questions, you can contact me by [email](${email}) or through [GitHub](https://github.com/${github}).

If you are interested in contributing, please follow the guidelines outlined within the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

${tests}`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project. What was your motivation? What problem does this solve?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are some examples and instructions for use?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter any applicable tests for this project.'
        }
    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('./Generated README/README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });




// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
