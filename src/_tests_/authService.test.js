import * as auth from '../services/authService';

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('logs in as admin', () => {
    const user = auth.login('admin@cleancity.com', 'anyPassword');
    expect(user).toBeDefined();
    expect(user.role).toBe('admin');
  });

  test('logs in as regular user', () => {
    const user = auth.login('user@cleancity.com', '123456');
    expect(user).toBeDefined();
    expect(user.role).toBe('user');
  });

  test('retrieves current user', () => {
    auth.login('test@example.com', 'pass');
    const current = auth.getCurrentUser();
    expect(current).not.toBeNull();
    expect(current.email).toBe('test@example.com');
  });

  test('logs out correctly', () => {
    auth.login('test@example.com', 'pass');
    auth.logout();
    const current = auth.getCurrentUser();
    expect(current).toBeNull();
  });

  test('isAdmin returns true only for admins', () => {
    auth.login('admin@domain.com', 'admin');
    expect(auth.isAdmin()).toBe(true);

    auth.login('user@domain.com', 'user');
    expect(auth.isAdmin()).toBe(false);
  });
});
