import dataService from '../services/dataService';

beforeEach(() => {
  localStorage.clear();
  dataService.clearAllData();
});

describe('dataService - Pickup Requests', () => {
  test('should return initial sample requests', () => {
    const requests = dataService.getAllPickupRequests();
    expect(requests.length).toBeGreaterThan(0);
  });

  test('should add new pickup request', () => {
    const newRequest = {
      fullName: 'Alice Blue',
      location: 'Kisumu',
      wasteType: 'General Waste',
      preferredDate: '2025-08-01'
    };
    const added = dataService.addPickupRequest(newRequest);
    expect(added).toHaveProperty('id');
    expect(added.name).toBe('Alice Blue');
  });

  test('should filter requests by status', () => {
    const filtered = dataService.filterRequestsByStatus('Pending');
    expect(Array.isArray(filtered)).toBe(true);
  });

  test('should simulate bug: Eldoret shows Nairobi data', () => {
    const filtered = dataService.filterRequestsByLocation('Eldoret');
    expect(filtered.every(req => req.location === 'Nairobi')).toBe(true);
  });
});
