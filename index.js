const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, title, id, email, github] = profileDataArgs;

fs.writeFile(
  'index.html',
  generatePage(name, title, id, email, github),
  (err) => {
    if (err) throw err;

    console.log('markup complete');
  }
);
