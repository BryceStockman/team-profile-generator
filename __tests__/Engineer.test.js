const Engineer = require('../lib/Engineer');

test('creates an engineer card', () => {
  const mockEngineer = {
    name: 'Mike',
    id: 23,
    email: 'mike@gmail.com',
    github: 'mikehub',
  };
  const engineer = new Engineer('Mike', 23, 'mike@gmail.com', 'mikehub');
  console.log(engineer);

  expect(engineer).toEqual(mockEngineer);
});
