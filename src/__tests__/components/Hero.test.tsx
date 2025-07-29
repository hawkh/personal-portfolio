import { render, screen, fireEvent } from '../../utils/testUtils';
import Hero from '../../components/Hero';

// Mock the data imports
jest.mock('../../data/personal', () => ({
  personalData: {
    basicInfo: {
      name: 'Test User',
      title: 'Test Title'
    }
  }
}));

jest.mock('../../data/contact', () => ({
  socialLinks: [
    {
      href: 'https://linkedin.com/test',
      icon: '/test-icon.svg',
      name: 'LinkedIn',
      color: '#0A66C2'
    }
  ]
}));

describe('Hero Component', () => {
  beforeEach(() => {
    // Mock gtag for analytics
    window.gtag = jest.fn();
  });

  it('renders hero section with name and title', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
    expect(screen.getByText('Sai Ruthvik')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning Engineer')).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('📄 Download Resume')).toBeInTheDocument();
    expect(screen.getByText('🚀 View Projects')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Hero />);
    
    const socialLinks = screen.getAllByRole('link');
    const externalLinks = socialLinks.filter(link => 
      link.getAttribute('target') === '_blank' && 
      link.getAttribute('rel') === 'noopener noreferrer'
    );
    
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it('tracks resume download when clicked', () => {
    render(<Hero />);
    
    const resumeButton = screen.getByText('📄 Download Resume');
    fireEvent.click(resumeButton);
    
    // Note: In a real test, you'd mock the gtag function and verify it was called
    expect(window.gtag).toHaveBeenCalled();
  });

  it('has proper accessibility attributes', () => {
    render(<Hero />);
    
    const section = screen.getByRole('main', { hidden: true }) || screen.getByText(/Hi, I'm/).closest('section');
    expect(section).toHaveAttribute('id', 'home');
  });
});