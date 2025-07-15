import { login, logout, getCurrentUser } from '../services/authService';

describe('authService', () => {
  it('logs in a user', () => {
    const user = login('admin@cleancity.com', 'admin123');
    expect(user).toHaveProperty('email', 'admin@cleancity.com');
  });

  it('returns null for invalid login', () => {
    const user = login('wrong@user.com', 'wrong');
    expect(user).toBeNull();
  });

  it('gets current user after login', () => {
    login('user@cleancity.com', 'password123');
    const user = getCurrentUser();
    expect(user.email).toBe('user@cleancity.com');
  });

  it('logs out the user', () => {
    logout();
    const user = getCurrentUser();
    expect(user).toBeNull();
  });
});
