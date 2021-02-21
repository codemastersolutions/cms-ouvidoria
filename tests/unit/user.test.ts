import { User } from '@models';

describe('User model tests', () => {
  test('it should be ok', () => {
    const user = new User();
    const name = 'Gilson Gabriel';
    const email = 'gilson@codemastersolucoes.com';

    user.name = name;
    user.email = email;

    expect(user.name).toEqual(name);
    expect(user.email).toEqual(email);
  });
});
