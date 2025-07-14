import dataService from './dataService';

describe('dataService', () => {
  beforeEach(() => {
    localStorage.clear();
    dataService.clearAllData();
  });

  it('adds and retrieves a pickup request', () => {
    const newRequest = dataService.addPickupRequest({
      fullName: 'Alice',
      location: 'Nairobi',
      wasteType: 'Recyclable',
      preferredDate: '2025-07-14',
    });
    expect(newRequest.name).toBe('Alice');

    const all = dataService.getAllPickupRequests();
    expect(all.find(r => r.name === 'Alice')).toBeTruthy();
  });

  it('adds and retrieves feedback', () => {
    const feedback = dataService.addFeedback({
      requestId: 'REQ001',
      reason: 'Missed Pickup',
      comments: 'Did not come on time',
    });
    expect(feedback.reason).toBe('Missed Pickup');

    const all = dataService.getAllFeedback();
    expect(all.length).toBeGreaterThan(0);
  });

  it('manages user authentication', () => {
    const added = dataService.addUser({
      id: '99',
      name: 'TestUser',
      email: 'test@site.com',
      password: 'test123',
      role: 'user',
      createdAt: new Date().toISOString(),
    });
    expect(added).toBe(true);

    const user = dataService.getUserByEmail('test@site.com');
    expect(user.name).toBe('TestUser');
  });
});
