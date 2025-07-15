import { render, screen, fireEvent } from '@testing-library/react';
import Admin from '../components/Admin';
import React from 'react';

describe('Admin Page', () => {
  beforeEach(() => {
    localStorage.setItem('pickupRequests', JSON.stringify([
      { id: 'REQ001', date: '2025-07-10', name: 'Alice', location: 'Zone 1', status: 'Pending' }
    ]));
  });

  it('renders admin summary and requests table', () => {
    render(<Admin />);
    expect(screen.getByText(/Admin: Manage Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Requests/i)).toBeInTheDocument();
  });

  it('marks request as completed', () => {
    render(<Admin />);
    fireEvent.click(screen.getByText('Complete'));
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('deletes a request with confirmation', () => {
    window.confirm = jest.fn(() => true);
    render(<Admin />);
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  });
});
