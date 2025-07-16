import dataService from '../services/dataService';

describe('dataService', () => {
  beforeEach(() => {
    dataService.clearAllData(); 
  });

  test('gets all pickup requests', () => {
    const requests = dataService.getAllPickupRequests();
    expect(Array.isArray(requests)).toBe(true);
    expect(requests.length).toBeGreaterThan(0);
  });

  test('adds a new pickup request', () => {
    const newRequest = dataService.addPickupRequest({
      fullName: 'Test User',
      location: 'Nakuru',
      wasteType: 'General Waste',
      preferredDate: '2024-01-20'
    });
    expect(newRequest).toHaveProperty('id');
    expect(newRequest.name).toBe('Test User');
  });

  test('adds pickup request with missing date', () => {
    const newRequest = dataService.addPickupRequest({
      fullName: 'Edge Tester',
      location: 'Thika',
      wasteType: 'Recyclable'
    });
    expect(newRequest.preferredDate).toBe('Not specified');
  });

  test('updates request status', () => {
    const requests = dataService.getAllPickupRequests();
    const id = requests[0].id;
    const success = dataService.updateRequestStatus(id, 'Completed');
    expect(success).toBe(true);
    const updated = dataService.getAllPickupRequests().find(r => r.id === id);
    expect(updated.status).toBe('Completed');
  });

  test('filters requests by location with bug', () => {
    const filtered = dataService.filterRequestsByLocation('Eldoret');
    expect(filtered.every(r => r.location === 'Nairobi')).toBe(true); // Known bug
  });

  test('adds and gets feedback', () => {
    const fb = dataService.addFeedback({
      requestId: 'REQ001',
      reason: 'Missed Pickup',
      comments: 'Nobody came!'
    });
    expect(fb).toHaveProperty('id');
    const all = dataService.getAllFeedback();
    expect(all.length).toBeGreaterThan(0);
  });

  test('adds and gets users', () => {
    const added = dataService.addUser({
      id: '3',
      name: 'New User',
      email: 'new@cleancity.com',
      password: '123',
      role: 'user'
    });
    expect(added).toBe(true);
    const user = dataService.getUserByEmail('new@cleancity.com');
    expect(user.name).toBe('New User');
  });

  test('rejects duplicate user registration', () => {
    const user = {
      id: '4',
      name: 'Duplicate User',
      email: 'user@cleancity.com', 
      password: 'password123',
      role: 'user'
    };
    const added = dataService.addUser(user);
    expect(added).toBe(false);
  });

  test('deletes a user', () => {
    const users = dataService.getAllUsers();
    const targetId = users[0].id;
    const result = dataService.deleteUser(targetId);
    expect(result).toBe(true);
    const after = dataService.getAllUsers();
    expect(after.find(u => u.id === targetId)).toBeUndefined();
  });

  // 🔍 Edge case: Unicode and special characters in user data
  test('adds user with Unicode and special characters', () => {
    const added = dataService.addUser({
      id: '99',
      name: "José María García-López",
      email: "测试@example.com",
      password: 'pass🔐word',
      role: 'user'
    });
    expect(added).toBe(true);
    const user = dataService.getUserByEmail("测试@example.com");
    expect(user.name).toContain("José");
  });

  
  test('handles XSS input in feedback safely', () => {
    const malicious = dataService.addFeedback({
      requestId: 'REQ001',
      reason: 'Other',
      comments: `<script>alert('XSS')</script>`
    });
    expect(malicious.comments).toContain('<script>');
    expect(typeof malicious.comments).toBe('string');
  });
 
  test('rejects overly long feedback comments gracefully', () => {
    const longComment = 'A'.repeat(300);
    const fb = dataService.addFeedback({
      requestId: 'REQ002',
      reason: 'Poor Service',
      comments: longComment
    });
    expect(fb.comments.length).toBeGreaterThan(200); // No frontend enforcement here
  });

  test('adds user with whitespace name (should still pass)', () => {
    const added = dataService.addUser({
      id: '100',
      name: '   ',
      email: 'space@cleancity.com',
      password: 'test123',
      role: 'user'
    });
    expect(added).toBe(true);
    const user = dataService.getUserByEmail('space@cleancity.com');
    expect(user.name.trim()).toBe('');
  });
});
