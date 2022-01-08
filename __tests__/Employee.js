const Employee = require('../lib/Employee');

test('creates an Employee', () => {
  const mockEmployee = {
    name: 'Mike',
    id: 23,
    email: 'mike@gmail.com',
  };
  const employee = new Employee('Mike', 23, 'mike@gmail.com');
  console.log(employee);

  expect(employee).toEqual(mockEmployee);
});
