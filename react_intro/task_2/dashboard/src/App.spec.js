import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the h1 with text "School dashboard"', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: /school dashboard/i })
    ).toBeInTheDocument();
  });

  test('renders the body paragraph text', () => {
    render(<App />);
    expect(
      screen.getByText(/login to access the full dashboard/i)
    ).toBeInTheDocument();
  });

  test('renders the footer paragraph text', () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`Copyright ${year} - Holberton School`, 'i'))
    ).toBeInTheDocument();
  });

  test('renders an img element', () => {
    render(<App />);
    expect(
      screen.getByRole('img', { name: /holberton logo/i })
    ).toBeInTheDocument();
  });

  test('renders two input elements (email and password)', () => {
    const { container } = render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(container.querySelectorAll('input')).toHaveLength(2);
  });

  test('renders two labels with texts "Email" and "Password"', () => {
    render(<App />);
    expect(screen.getByText(/email/i).tagName).toBe('LABEL');
    expect(screen.getByText(/password/i).tagName).toBe('LABEL');
  });

  test('renders a button with text OK', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });
});
