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
      screen.getByText(new RegExp(`Copyright ${year} - holberton School`, 'i'))
    ).toBeInTheDocument();
  });

  test('renders an img element', () => {
    render(<App />);
    expect(
      screen.getByRole('img', { name: /holberton logo/i })
    ).toBeInTheDocument();
  });
});
