import React from 'react';import { render, screen, within, cleanup } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

const mockStorage = () => {
  localStorage.setItem('pickupRequests', JSON.stringify([
    { name: 'Alice', status: 'completed', date: '2025-07-01' },
    { name: 'Bob', status: 'missed', date: '2025-07-02' },
    { name: 'Charlie', status: 'missed', date: '2025-07-02' },
  ]));

  localStorage.setItem('blogPosts', JSON.stringify([
    { title: 'Clean Tips', author: 'Alice' },
    { title: 'Waste Facts', author: 'Bob' },
  ]));

  localStorage.setItem('communityPosts', JSON.stringify([
    { title: 'We need bins', user: 'Alice' },
    { title: 'Street Cleanup', user: 'Charlie' },
  ]));
};

describe('Dashboard Component', () => {
  beforeEach(() => {
    cleanup(); // Removes previous renders from the DOM
    localStorage.clear();
  });

  it('renders dashboard title', () => {
    mockStorage();
    render(<Dashboard />);
    expect(screen.getByRole('heading', { name: /dashboard analytics/i })).toBeInTheDocument();
  });

  it('renders correct metrics', () => {
    mockStorage();
    render(<Dashboard />);
    const stats = screen.getByRole('main', { name: /dashboard analytics/i });

    expect(within(stats).getByText('Total Requests').nextSibling).toHaveTextContent('3');
    expect(within(stats).getByText('Missed Pickups').nextSibling).toHaveTextContent('2');
    expect(within(stats).getByText('Blog Posts').nextSibling).toHaveTextContent('2');
    expect(within(stats).getByText('Community Posts').nextSibling).toHaveTextContent('2');
  });

  it('renders requests per month chart with correct labels', () => {
    mockStorage();
    render(<Dashboard />);
    expect(screen.getByText(/07\/25/)).toBeInTheDocument();
  });

  it('renders top users by activity', () => {
    mockStorage();
    render(<Dashboard />);
    const leaderboard = screen.getByRole('list');
    const items = within(leaderboard).getAllByRole('listitem');
    const users = items.map(li => li.textContent);

    expect(users.some(u => u.includes('Alice') && u.includes('3'))).toBe(true);
    expect(users.some(u => u.includes('Bob') && u.includes('2'))).toBe(true);
    expect(users.some(u => u.includes('Charlie') && u.includes('2'))).toBe(true);
  });

  it('handles empty localStorage gracefully', () => {
    render(<Dashboard />);
    const stats = screen.getByRole('main', { name: /dashboard analytics/i });

    expect(within(stats).getByText('Total Requests').nextSibling).toHaveTextContent('0');
    expect(within(stats).getByText('Missed Pickups').nextSibling).toHaveTextContent('0');
    expect(within(stats).getByText('Blog Posts').nextSibling).toHaveTextContent('0');
    expect(within(stats).getByText('Community Posts').nextSibling).toHaveTextContent('0');
  });
});
