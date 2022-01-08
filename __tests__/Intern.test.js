const Intern = require('../lib/Intern');

test('creates an intern card', () => {
  const mockIntern = {
    name: 'Mike',
    title: 'intern',
    id: 23,
    email: 'mike@gmail.com',
    school: 'UofU',
  };
  const intern = new Intern('Mike', 'intern', 23, 'mike@gmail.com', 'UofU');
  console.log(intern);

  expect(intern).toEqual(mockIntern);
});
