Cypress.Commands.add('loginAsUser', () => {
  window.localStorage.setItem('ccUser', JSON.stringify({
    name: 'Demo User',
    email: 'user@cleancity.com',
    avatar: '',
    role: 'user'
  }));
});

Cypress.Commands.add('loginAsAdmin', () => {
  window.localStorage.setItem('ccUser', JSON.stringify({
    name: 'Admin User',
    email: 'admin@cleancity.com',
    avatar: '',
    role: 'admin'
  }));
});
