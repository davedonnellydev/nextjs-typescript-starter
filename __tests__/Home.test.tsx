import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });
});
