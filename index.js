// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



function renderLicenseBadge(license) {
    if (license == "The Hippocratic License") {
        console.log("The Hippocratic License is chosen")
        return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
    }
    else if (license == "ISC") {
        console.log("ISC is chosen")
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
    else if (license == "MIT") {
        console.log("MIT is chosen")
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (license == "Mozilla") {
        console.log("Mozilla is chosen")
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (license == "Unlicense") {
        console.log("Unlicense is chosen")
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    else if (license == "None") {
        return "N/A"
    }
}

function renderLicense(license) {
    if (license == "The Hippocratic License") {
        return "[The Hippocratic License: An Ethical License for Open Source Communities](https://firstdonoharm.dev)"
    }
    else if (license == "ISC") {
        return "[The ISC License](https://opensource.org/licenses/ISC)"
    }
    else if (license == "MIT") {
        return "[The MIT License](https://opensource.org/licenses/MIT)"
    }
    else if (license == "Mozilla") {
        return "[The Mozilla Public License](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (license == "Unlicense") {
        return "[The Unlicense: Dedicating Software to the Public Domain](http://unlicense.org/)"
    }
    else if (license == "None") {
        return "N/A"
    }
}

const generateREADME = ({ title, description, installation, usage, license, email, github, tests }) =>
    `# ${title}

${renderLicenseBadge(license)}

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

## License

${renderLicense(license)}

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
            type: 'list',
            message: 'Please choose the applicable license(s), if any.',
            name: 'license',
            choices: ['The Hippocratic License', 'ISC', 'MIT', 'Mozilla', 'Unlicense', 'None'],
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
        console.log(answers)
        fs.writeFile('./Generated README/README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


