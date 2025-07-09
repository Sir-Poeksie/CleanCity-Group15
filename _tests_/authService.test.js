import * as auth from '../services/authService';

describe('authService', () => {
  afterEach(() => localStorage.clear());

  test('should log in as admin if email includes "admin"', () => {
    const user = auth.login('admin@site.com', 'pass');
    expect(user.role).toBe('admin');
  });

  test('should retrieve current user from localStorage', () => {
    const user = auth.login('user@demo.com', 'pass');
    const current = auth.getCurrentUser();
    expect(current.email).toBe(user.email);
  });

  test('should remove user on logout', () => {
    auth.login('someone@demo.com', 'pass');
    auth.logout();
    expect(auth.getCurrentUser()).toBe(null);
  });
});
