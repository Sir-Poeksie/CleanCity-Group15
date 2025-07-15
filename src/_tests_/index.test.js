import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

test('renders App component to DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
