import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogAdmin from './BlogAdmin';

describe('BlogAdmin Component', () => {
  it('renders admin panel and posts', () => {
    render(<BlogAdmin />);
    expect(screen.getByText('Blog Admin Panel')).toBeInTheDocument();
    expect(screen.getByText('5 Ways to Reduce Household Waste')).toBeInTheDocument();
  });

  it('can open the post form', () => {
    render(<BlogAdmin />);
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'New Post' } });
    fireEvent.change(screen.getByPlaceholderText('Tags (comma separated)'), { target: { value: 'New, Tag' } });
    expect(screen.getByDisplayValue('New Post')).toBeInTheDocument();
  });
});
