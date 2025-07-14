function setUser(role = 'user') {
  const base = {
    name: role === 'admin' ? 'Admin User' : 'Demo User',
    email: role === 'admin' ? 'admin@cleancity.com' : 'user@cleancity.com',
    avatar: `https://i.pravatar.cc/100?u=${role}@cleancity.com`,
    role
  };
  window.localStorage.setItem('ccUser', JSON.stringify(base));
}

Cypress.Commands.add('loginAsUser', () => {
  setUser('user');
});

Cypress.Commands.add('loginAsAdmin', () => {
  setUser('admin');
});

Cypress.Commands.add('seedAdminRequests', () => {
  const sampleRequests = [
    {
      id: 'REQ100',
      name: 'Test User',
      date: '2025-07-10',
      location: 'Nairobi',
      status: 'Pending'
    },
    {
      id: 'REQ101',
      name: 'Another User',
      date: '2025-07-11',
      location: 'Kisumu',
      status: 'Scheduled'
    }
  ];

  window.localStorage.setItem('pickupRequests', JSON.stringify(sampleRequests));
});

// cypress/support/commands.js
Cypress.Commands.add('seedAdminRequests', () => {
  const sampleRequests = [
    {
      id: 'REQ100',
      name: 'Test User',
      date: '2025-07-10',
      location: 'Nairobi',
      status: 'Pending'
    },
    {
      id: 'REQ101',
      name: 'Another User',
      date: '2025-07-11',
      location: 'Kisumu',
      status: 'Scheduled'
    }
  ];

  window.localStorage.setItem('pickupRequests', JSON.stringify(sampleRequests));
});

// cypress/support/commands.js
Cypress.Commands.add('seedAdminRequests', () => {
  const sampleRequests = [
    {
      id: 'REQ100',
      name: 'Test User',
      date: '2025-07-10',
      location: 'Nairobi',
      status: 'Pending'
    },
    {
      id: 'REQ101',
      name: 'Another User',
      date: '2025-07-11',
      location: 'Kisumu',
      status: 'Scheduled'
    }
  ];

  window.localStorage.setItem('pickupRequests', JSON.stringify(sampleRequests));
});
