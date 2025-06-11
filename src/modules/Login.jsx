import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'; // Pastikan path ini sesuai dengan file Login.jsx
import { BrowserRouter as Router } from 'react-router-dom'; // Untuk menangani routing

test('renders login form and handles login', () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  // Cek apakah form login muncul
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByText(/login/i)).toBeInTheDocument();

  // Masukkan email dan password
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'test@example.com' }
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'password123' }
  });

  // Submit form
  fireEvent.click(screen.getByText(/login/i));

  // Cek jika error message muncul (jika data tidak valid)
  expect(screen.getByText(/invalid credentials, please try again/i)).toBeInTheDocument();
});
