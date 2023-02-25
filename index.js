// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, email, github, tests }) =>
    `# ${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions and Contributing](#questions)
- [Tests](#tests)

## Installation

${installation}

## Usage

${usage}

## License



## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Questions and Contributing

If you have any questions, you can contact me by [email](${email}) or through [GitHub](https://github.com/${github}).

If you are interested in contributing, please follow the guidelines outlined within the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

${tests}`

// TODO: Create an array of questions for user input
const questions = [

];

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
            message: 'Please enter any applicable tests for this project.',
        },
    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
