const Manager = require('../lib/Manager');

test('creates an Manager card', () => {
  const mockManager = {
    name: 'Mike',
    title: 'manager',
    id: 23,
    email: 'mike@gmail.com',
    officeNumber: 51,
  };
  const manager = new Manager('Mike', 'manager', 23, 'mike@gmail.com', 51);
  console.log(manager);

  expect(manager).toEqual(mockManager);
});
