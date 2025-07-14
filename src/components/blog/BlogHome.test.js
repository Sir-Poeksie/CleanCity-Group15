import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogHome from './BlogHome';

describe('BlogHome Component', () => {
  it('renders CleanCity Blog title', () => {
    render(<BlogHome />);
    expect(screen.getByText('CleanCity Blog')).toBeInTheDocument();
    expect(screen.getByText('Featured Posts')).toBeInTheDocument();
    expect(screen.getByText('All Articles')).toBeInTheDocument();
  });

  it('displays blog cards', () => {
    render(<BlogHome />);
    expect(screen.getByText('5 Ways to Reduce Household Waste')).toBeInTheDocument();
  });
});
