// __tests__/AdminPanel.test.js
import { render, screen } from '@testing-library/react';
import Admin from '../components/Admin';
import dataService from '../services/dataService';

jest.mock('../services/dataService');

beforeEach(() => {
  dataService.getAllPickupRequests.mockReturnValue([
    { id: 'REQ003', name: 'Admin Tester', location: 'Kisumu', wasteType: 'Hazardous', preferredDate: '2025-07-11', status: 'Scheduled' }
  ]);
});

test('renders admin panel with requests', () => {
  render(<Admin user={{ name: 'Admin', role: 'admin' }} />);
  expect(screen.getByText('REQ003')).toBeInTheDocument();
  expect(screen.getByText(/Scheduled/i)).toBeInTheDocument();
});
