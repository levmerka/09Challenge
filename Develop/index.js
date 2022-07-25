// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const {questions} = require(`./data`);
const {generateMarkdown} = require(`./utils/generateMarkdown`)
const fs = require(`fs`);

// function generates README.md
function writeToFile(data) {
  fs.writeFile("./generated/readMe.md", generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
async function init() {
  try{
 const answers = await inquirer.prompt(questions);
 
 console.log(answers);
 writeToFile(generateMarkdown(answers));
} catch(err) {
  console.error(err);
}

}

// Function call to initialize app


init();
