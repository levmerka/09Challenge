// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const {questions} = require(`./data`);
const fs = require(`fs`);

// function generates README.md
function writeToFile(data) {
  fs.writeFile("./generated/readMe.md", data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
async function init() {
 const answers = await inquirer.prompt(questions);
 console.log(answers)
}

// Function call to initialize app
init();
writeToFile(`readmeh`);
