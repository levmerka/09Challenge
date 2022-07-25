// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = `${data.license}`;
  let licenseChosen = ``;
  if (licenseType === `MIT License`) {
    licenseChosen = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseType === `GNU General Public License v3.0`) {
    licenseChosen = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseType === `Apache 2.0 License`) {
    licenseChosen = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = `${data.license}`;
  let licenseChosen = ``;
  if (licenseType === `MIT License`) {
    licenseChosen = `(https://opensource.org/licenses/MIT)`;
  } else if (licenseType === `GNU General Public License v3.0`) {
    licenseChosen = `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseType === `Apache 2.0 License`) {
    licenseChosen = `(https://opensource.org/licenses/Apache-2.0)`;
  }
  return licenseChosen;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = `${data.license}`;
  let licenseChosen = ``;
  if (licenseType === `MIT License`) {
    licenseChosen = `MIT License`;
  } else if (licenseType === "GNU General Public License v3.0") {
    licenseChosen = "GNU General Public License v3.0";
  } else if (licenseType === `Apache 2.0 License`) {
    licenseChosen = `Apache 2.0 License`;
  }
  return licenseChosen;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  ### License: ${renderLicenseBadge(data)}, ${renderLicenseLink(data)}
  # Title: ${data}
  ## Table of Contents:
  
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributors](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 ## Description
 ${data.description}
 ## Installation
 ${data.instructions}
 ## Usage 
 ${data.usage}
 ## Contributing
 ${data.contributors}
 ## Tests
 ${data.testing}
 ## Questions?
  `;
}
module.exports = generateMarkdown;
