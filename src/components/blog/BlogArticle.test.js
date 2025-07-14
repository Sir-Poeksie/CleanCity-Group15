import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogArticle from './BlogArticle';

const mockMatch = { params: { id: '1' } };

describe('BlogArticle Component', () => {
  it('renders article with comments', () => {
    render(<BlogArticle match={mockMatch} />);
    expect(screen.getByText('5 Ways to Reduce Household Waste')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
  });

  it('adds a new comment', () => {
    render(<BlogArticle match={mockMatch} />);
    const input = screen.getByPlaceholderText('Add a comment...');
    fireEvent.change(input, { target: { value: 'Great article!' } });
    fireEvent.click(screen.getByText('Post'));
    expect(screen.getByText('Great article!')).toBeInTheDocument();
  });
});
