const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getTitle() {
    return 'engineer';
  }

  // Unique to manager, just replace for other titles
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
