const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getTitle() {
    return 'intern';
  }

  // Unique to manager, just replace for other titles
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
