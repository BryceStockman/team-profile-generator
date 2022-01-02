const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
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
      type: 'list',
      name: 'managerTitle',
      message: 'What is their title? (Required)',
      choices: ['manager', 'engineer', 'intern'],
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please select your title');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'managerId',
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
      name: 'managerEmail',
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
  ]);
};

const promptEmployee = (employeeData) => {
  if (!employeeData.employee) {
    employeeData.employee = [];
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
        type: 'list',
        name: 'employeeTitle',
        message: "What is your employee's title? (Required)",
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
      {
        type: 'confirm',
        name: 'additionalEmployee',
        message: 'Would you like to add another employee?',
        default: false,
      },
    ])
    .then((info) => {
      employeeData.employee.push(info);
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
    const pageHTML = generatePage(employeeData);

    fs.writeFile('index.html', pageHTML, (err) => {
      if (err) throw err;

      // console.log('markup complete');
    });
  });
