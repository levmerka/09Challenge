// Questions array
const questions = [
  {
    type: `input`,
    message: `What is the title of your project?`,
    name: `title`,
  }, 
  {
    type: `input`,
    message: `enter description of your project`,
    name: `description`,
  },
  {
    type: `list`,
    message: `select LICENSE`,
    name: `license`,
    choices: [`MIT License`, `Apache 2.0 License`, `GNU General Public License v3.0`],
  },
  {
    type: `input`,
    message: `enter GitHub username`,
    name: `username`,
  },
  {
    type: `input`,
    message: `enter email or contact`,
    name: `contact`,
  },
  {
    type: `input`,
    message: `install instructions go here`,
    name: `instructions`,
  },
  {
    type: `input`,
    message: `usage guide go here`,
    name: `usage`,
  },
  {
    type: `input`,
    message: `enter addt'l contributors here`,
    name: `contributors`,
  },
  {
    type: `input`,
    message: `testing instructions`,
    name: `testing`,
  },
];
module.exports = {
  questions,
};
