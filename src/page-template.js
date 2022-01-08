const employeeHTML = [];

const generateManager = (managerInfo) => {
  const { name, title, id, email, officeNumber } = managerInfo;

  if (!managerInfo) {
    return '';
  }

  return `
  <div class="col-md-4 my-3">
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title">Name: ${name}</h5>
          <h6 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> ${title}</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
          </ul>
        </div>    
      </div>
    </div>
  `;
};

const generateEngineer = (engineerInfo) => {
  const { name, title, id, email, github } = engineerInfo;

  if (!engineerInfo) {
    return '';
  }

  return `
  <div class="col-md-4 my-3">
    <div class="card col-md-4" style="width: 18rem;">
      <div class="card-header bg-primary text-white">
        <h5 class="card-title">Name: ${name}</h5>
        <h6 class="card-subtitle mb-2"><i class="fas fa-glasses"></i> ${title}</h6>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${github}">${github}</a></li>
        </ul>
      </div>        
    </div>
  </div>
  `;
};

const generateIntern = (internInfo) => {
  const { name, title, id, email, school } = internInfo;

  if (!internInfo) {
    return '';
  }

  return `
  <div class="col-md-4 my-3">
    <div class="card col-md-4" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title">Name: ${name}</h5>
          <h6 class="card-subtitle mb-2"><i class="fas fa-user-graduate"></i> ${title}</h6>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
          </ul>
        </div>      
      </div>
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

  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/3b2adb7b87.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Portfolio Demo</title>
  </head>

  <body>
  <section>
    <h1 class="text-center bg-danger text-white mb-3 p-5">My Team</h1>
  </section>

    <section id="employee-info" class="container d-flex mt-3">
      <div class="row justify-content-center">
        ${employeeHTML.join('')}
      </div>
    </section>
  </body>
  </html>
  `;
};
