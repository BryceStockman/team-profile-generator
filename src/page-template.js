const generateManager = (managerInfo) => {
  const { managerName, managerTitle, managerId, managerEmail, officeNumber } =
    managerInfo;

  if (!managerInfo) {
    return '';
  }

  return `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name: ${managerName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">title: ${managerTitle}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${managerId}</li>
        <li class="list-group-item">Email: ${managerEmail}</li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>        
    </div>
  `;
};

const generateEmployees = (employeeArr) => {
  return `
<section>
${employeeArr
  .map(({ employeeName, employeeTitle, employeeId, employeeEmail, github }) => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Name: ${employeeName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">title: ${employeeTitle}</h6>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employeeId}</li>
        <li class="list-group-item">Email: ${employeeEmail}</li>
        <li class="list-group-item">GitHub: ${github}</li>
      </ul>
    </div>
    `;
  })
  .join('')}
  </section>
`;
};

module.exports = (templateData) => {
  const { employee, ...manager } = templateData;
  // console.log(templateData);

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
    ${generateManager(manager)}
    ${generateEmployees(employee)}
  </body>
  </html>
  `;
};
