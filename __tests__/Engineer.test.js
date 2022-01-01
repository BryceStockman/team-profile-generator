const Engineer = require('../lib/Engineer');

test('creates an engineer card', () => {
  const engineer = new Engineer('Dave');

  expect(engineer.name).toBe('Dave');
  expect(engineer.title).toHaveProperty('title');
  expect(engineer.id).toHaveProperty('id');
  expect(engineer.email).toHaveProperty('email');
  expect(engineer.github).toHaveProperty('github');
});
