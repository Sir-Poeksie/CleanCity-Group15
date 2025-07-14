import * as authService from './authService';

describe('authService', () => {
  afterEach(() => localStorage.clear());

  it('logs in and returns user', () => {
    const user = authService.login('admin@site.com', 'password');
    expect(user.email).toBe('admin@site.com');
    expect(user.role).toBe('admin');
  });

  it('gets current user from localStorage', () => {
    authService.login('user@test.com', '123');
    const user = authService.getCurrentUser();
    expect(user.email).toBe('user@test.com');
  });

  it('logs out user', () => {
    authService.login('admin@test.com', '123');
    authService.logout();
    expect(authService.getCurrentUser()).toBeNull();
  });
});
