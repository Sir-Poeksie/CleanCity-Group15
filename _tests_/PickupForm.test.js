// __tests__/PickupForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/Home';
import userEvent from '@testing-library/user-event';

test('validates empty pickup form submission', async () => {
  render(<Home user={{ name: 'John Doe' }} />);

  const submitBtn = screen.getByRole('button', { name: /request pickup/i });
  fireEvent.click(submitBtn);

  expect(await screen.findByText(/full name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/please select a location/i)).toBeInTheDocument();
  expect(screen.getByText(/please select a waste type/i)).toBeInTheDocument();
});

test('submits valid pickup request', async () => {
  render(<Home user={{ name: 'John Doe' }} />);
  
  await userEvent.type(screen.getByLabelText(/full name/i), 'John Doe');
  await userEvent.selectOptions(screen.getByLabelText(/location/i), 'Nairobi');
  await userEvent.selectOptions(screen.getByLabelText(/waste type/i), 'Recyclable');
  await userEvent.type(screen.getByLabelText(/preferred date/i), '2025-08-01');
  
  fireEvent.click(screen.getByRole('button', { name: /request pickup/i }));

  expect(await screen.findByText(/request submitted successfully/i)).toBeInTheDocument();
});
