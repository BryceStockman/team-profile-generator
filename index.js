const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeData = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the manager's name");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your manager's employee id? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your manager's employee id number");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your manager's email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your manager's email address");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number? (Required)",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter your manager's office number");
            return false;
          }
        },
      },
    ])
    .then((info) => {
      const { name, email, id, officeNumber } = info;
      const manager = new Manager(name, email, id, officeNumber);
      employeeData.push(manager);
    });
};

const promptEmployee = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeTitle',
        message: 'Would you like to add an employee or finish? (Required)',
        choices: ['engineer', 'intern', 'finish'],
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your employee's title");
            return false;
          }
        },
      },
    ])
    .then((info) => {
      if (info.employeeTitle === 'engineer') {
        createEngineer();
      } else if (info.employeeTitle === 'intern') {
        createIntern();
      } else {
        return;
      }
    });
};

function createEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: "What is the team employee's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: "What is your employee's employee id? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your employee's employee id number");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: "What is your employee's email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your employee's email address");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your employee's GitHub username? (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your employee's GitHub username");
            return false;
          }
        },
      },
    ])
    .then((info) => {
      const { name, email, id, github } = info;
      const engineer = new Engineer(name, email, id, github);
      employeeData.push(engineer);
      promptEmployee();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'employeeName',
        message: "What is the team employee's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeId',
        message: "What is your employee's employee id? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your employee's employee id number");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'employeeEmail',
        message: "What is your employee's email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your employee's email address");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is school is the intern at? (Required)',
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter your intern's school");
            return false;
          }
        },
      },
    ])
    .then((info) => {
      const { name, email, id, school } = info;
      const intern = new Intern(name, email, id, school);
      employeeData.push(intern);
      promptEmployee();
    });
}

promptManager()
  .then(promptEmployee)
  .then(generatePage(employeeData))
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
