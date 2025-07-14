import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockReturnValue({ render: jest.fn() }),
}));

describe('index.js', () => {
  it('renders the App component', () => {
    require('../index');
    expect(ReactDOM.createRoot).toHaveBeenCalled();
  });
});
