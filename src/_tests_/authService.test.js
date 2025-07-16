
import authService from '../services/authService';

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('registers and logs in a user', () => {
    const newUser = {
      name: 'José María García-López',
      email: 'test+tag@domain.com',
      password: 'ValidPass123',
      role: 'user'
    };
    const registered = authService.register(newUser);
    expect(registered).toBeTruthy();

    const user = authService.login('test+tag@domain.com', 'ValidPass123');
    expect(user).not.toBeNull();
    expect(user.email).toBe('test+tag@domain.com');
  });

  test('rejects login with invalid credentials', () => {
    const user = authService.login('user1@test.com', 'WrongPassword');
    expect(user).toBeNull();
  });

  test('handles unicode email', () => {
    const user = {
      name: 'Unicode User',
      email: '测试@example.com',
      password: 'SecurePass123',
      role: 'user'
    };
    authService.register(user);
    const login = authService.login('测试@example.com', 'SecurePass123');
    expect(login).not.toBeNull();
  });

  test('rejects empty or whitespace-only input', () => {
    const result = authService.register({
      name: '   ',
      email: '',
      password: '',
      role: 'user'
    });
    expect(result).toBeFalsy();
  });
});
