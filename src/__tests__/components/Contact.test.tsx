import { render, screen, fireEvent, waitFor } from '../../utils/testUtils';
import Contact from '../../components/Contact';

// Mock the contact data
jest.mock('../../data/contact', () => ({
  contactInfo: {
    email: 'test@example.com',
    phone: '+1234567890',
    location: 'Test City',
    availability: 'Available'
  },
  contactReasons: [
    {
      icon: 'BriefcaseIcon',
      title: 'Job Opportunities',
      description: 'Test description'
    }
  ],
  socialLinks: [
    {
      href: 'https://linkedin.com/test',
      icon: '/test-icon.svg',
      name: 'LinkedIn',
      color: '#0A66C2'
    }
  ]
}));

describe('Contact Component', () => {
  it('renders contact section with title', () => {
    render(<Contact />);
    
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it('renders contact form', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('validates form inputs', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('renders contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1234567890')).toBeInTheDocument();
    expect(screen.getByText('Test City')).toBeInTheDocument();
  });

  it('renders contact reasons', () => {
    render(<Contact />);
    
    expect(screen.getByText('Job Opportunities')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Contact />);
    
    const section = screen.getByText("Let's Connect").closest('section');
    expect(section).toHaveAttribute('id', 'contact');
  });
});