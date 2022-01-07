const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, title, id, email, github) {
    super(name, id, email);
    this.title = title;
    this.github = github;
  }

  // Unique to manager, just replace for other titles
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
