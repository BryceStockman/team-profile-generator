const employeeHTML = [];

const generateManager = (managerInfo) => {
  const { name, title, id, email, officeNumber } = managerInfo;

  if (!managerInfo) {
    return '';
  }

  return `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name: ${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">title: ${title}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>        
    </div>
  `;
};

const generateEngineer = (engineerInfo) => {
  const { name, title, id, email, github } = engineerInfo;

  if (!engineerInfo) {
    return '';
  }

  return `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name: ${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">title: ${title}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
      </ul>        
    </div>
  `;
};

const generateIntern = (internInfo) => {
  const { name, title, id, email, school } = internInfo;

  if (!internInfo) {
    return '';
  }

  return `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name: ${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">title: ${title}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">School: ${school}</li>
      </ul>        
    </div>
  `;
};

module.exports = (employeeData) => {
  for (i = 0; i < employeeData.length; i++) {
    if (i === 0) {
      const manager = employeeData[i];
      const managerData = generateManager(manager);
      employeeHTML.push(managerData);
    } else if (employeeData[i].title === 'engineer') {
      const engineer = employeeData[i];
      const engineerData = generateEngineer(engineer);
      employeeHTML.push(engineerData);
    } else if (employeeData[i].title === 'intern') {
      const intern = employeeData[i];
      const internData = generateIntern(intern);
      employeeHTML.push(internData);
    }
  }

  // console.log('employeeHTML', employeeHTML);

  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Portfolio Demo</title>
  </head>

  <body>
    ${employeeHTML}
  </body>
  </html>
  `;
};
