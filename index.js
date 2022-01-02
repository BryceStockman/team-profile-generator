const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, title, id, email, github);

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: (nameInput) => {
        if (nameInput) {
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
      message: "What is your manager's employee id?",
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
      message: "What is your manager's email address?",
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
      message: "What is your manager's office number?",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter your manager's office number");
          return false;
        }
      },
    },
  ]);
};

const promptEmployee = (employeeData) => {
  if (!employeeData.information) {
    employeeData.information = [];
  }

  console.log(`
=================
Add a New Employee
=================
`);

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team employee's name?",
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
        type: 'list',
        name: 'title',
        message: "What is your employee's title?",
        choices: ['engineer', 'intern'],
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter your employee's title");
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your employee's employee id?",
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
        name: 'email',
        message: "What is your employee's email address?",
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
        message: "What is your employee's GitHub username?",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your employee's GitHub username");
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'additionalEmployee',
        message: 'Would you like to add another employee?',
        default: false,
      },
    ])
    .then((info) => {
      employeeData.information.push(info);
      if (info.additionalEmployee) {
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
};

promptManager()
  .then(promptEmployee)
  .then((employeeData) => {
    console.log(employeeData);
  });

// fs.writeFile('index.html', pageHTML, (err) => {
//   if (err) throw err;

//   console.log('markup complete');
// });
