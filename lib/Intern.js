const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, title, id, email, school) {
    super(name, id, email);
    this.title = title;
    this.school = school;
  }

  // Unique to manager, just replace for other titles
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
