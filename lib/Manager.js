const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getTitle() {
    return 'manager';
  }

  // Unique to manager, just replace for other titles
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
