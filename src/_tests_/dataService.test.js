import dataService from '../services/dataService';

describe('dataService', () => {
  beforeEach(() => {
    localStorage.clear();
    dataService.clearAllData(); // reset to defaults
  });

  test('adds a pickup request', () => {
    const request = {
      fullName: 'Test User',
      location: 'Nairobi',
      wasteType: 'General Waste',
      preferredDate: '2025-08-01'
    };

    const result = dataService.addPickupRequest(request);
    expect(result).toBeDefined();
    expect(result.name).toBe('Test User');
    expect(result.status).toBe('Pending');

    const stored = dataService.getAllPickupRequests();
    expect(stored.length).toBeGreaterThan(0);
  });

  test('filters by status', () => {
    const results = dataService.filterRequestsByStatus('Pending');
    expect(Array.isArray(results)).toBe(true);
  });

  test('filters Eldoret requests (buggy logic)', () => {
    const results = dataService.filterRequestsByLocation('Eldoret');
    expect(results.every(req => req.location === 'Nairobi')).toBe(true); // intentional bug
  });

  test('adds and retrieves feedback', () => {
    const feedback = {
      requestId: 'REQ001',
      reason: 'Missed Pickup',
      comments: 'Did not collect on time.'
    };
    const newFeedback = dataService.addFeedback(feedback);
    expect(newFeedback).toBeDefined();

    const allFeedback = dataService.getAllFeedback();
    expect(allFeedback.length).toBeGreaterThan(0);
  });

  test('adds a new user and retrieves it', () => {
    const user = {
      id: '999',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123',
      role: 'user',
      createdAt: new Date().toISOString()
    };

    const success = dataService.addUser(user);
    expect(success).toBe(true);

    const fetched = dataService.getUserByEmail('test@example.com');
    expect(fetched).toBeDefined();
    expect(fetched.email).toBe('test@example.com');
  });

  test('fails to add duplicate user', () => {
    const duplicateUser = {
      id: '1',
      name: 'Demo User',
      email: 'user@cleancity.com',
      password: 'password123',
      role: 'user',
      createdAt: new Date().toISOString()
    };

    const success = dataService.addUser(duplicateUser);
    expect(success).toBe(false);
  });
});
