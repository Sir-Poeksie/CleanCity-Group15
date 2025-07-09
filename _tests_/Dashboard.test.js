
import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import dataService from '../services/dataService';

jest.mock('../services/dataService');

const mockUser = { name: 'Alice', email: 'alice@cc.com' };

beforeEach(() => {
  dataService.getAllPickupRequests.mockReturnValue([
    { id: 'REQ001', name: 'Alice', location: 'Nairobi', status: 'Pending', wasteType: 'General', preferredDate: '2025-07-10' },
    { id: 'REQ002', name: 'Bob', location: 'Mombasa', status: 'Completed', wasteType: 'Recyclable', preferredDate: '2025-07-11' }
  ]);
});

test('renders dashboard with pickup request table', () => {
  render(<Dashboard user={mockUser} />);
  expect(screen.getByText('REQ001')).toBeInTheDocument();
  expect(screen.getByText('REQ002')).toBeInTheDocument();
});
