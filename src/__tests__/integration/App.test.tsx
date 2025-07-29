import { render, screen } from '../../utils/testUtils';
import App from '../../App';

// Mock all data imports
jest.mock('../../data/personal', () => ({
  personalData: {
    basicInfo: {
      name: 'Test User',
      title: 'Test Title'
    }
  }
}));

jest.mock('../../data/contact', () => ({
  socialLinks: [],
  contactInfo: {
    email: 'test@example.com'
  },
  contactReasons: []
}));

jest.mock('../../data/skills', () => ({
  skillCategories: []
}));

jest.mock('../../data/projects', () => ({
  projects: []
}));

jest.mock('../../data/experience', () => ({
  experiences: []
}));

jest.mock('../../data/achievements', () => ({
  achievements: [],
  certifications: []
}));

jest.mock('../../data/statistics', () => ({
  statistics: [],
  expertiseAreas: []
}));

describe('App Integration', () => {
  it('renders all main sections', () => {
    render(<App />);
    
    // Check if main sections are present
    expect(screen.getByText(/Hi, I'm/)).toBeInTheDocument();
    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it('has proper navigation structure', () => {
    render(<App />);
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('includes accessibility features', () => {
    render(<App />);
    
    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});