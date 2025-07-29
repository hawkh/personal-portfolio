import { render, screen, fireEvent } from '../../utils/testUtils';
import Projects from '../../components/Projects';
import { createMockProject } from '../../utils/testUtils';

// Mock the projects data
jest.mock('../../data/projects', () => ({
  projects: [
    createMockProject({
      id: 'featured-project',
      title: 'Featured Project',
      featured: true
    }),
    createMockProject({
      id: 'regular-project',
      title: 'Regular Project',
      featured: false
    })
  ]
}));

describe('Projects Component', () => {
  it('renders projects section with title', () => {
    render(<Projects />);
    
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('Innovative AI solutions that deliver real-world impact')).toBeInTheDocument();
  });

  it('displays featured projects separately', () => {
    render(<Projects />);
    
    expect(screen.getByText('Featured Project')).toBeInTheDocument();
    expect(screen.getByText('Regular Project')).toBeInTheDocument();
  });

  it('renders project technologies as tags', () => {
    render(<Projects />);
    
    expect(screen.getAllByText('React')).toHaveLength(2); // Both projects have React
    expect(screen.getAllByText('TypeScript')).toHaveLength(2);
  });

  it('renders project links with proper attributes', () => {
    render(<Projects />);
    
    const codeLinks = screen.getAllByText('Code');
    expect(codeLinks[0]).toHaveAttribute('href', 'https://github.com/test/project');
    expect(codeLinks[0]).toHaveAttribute('target', '_blank');
    expect(codeLinks[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('shows featured badge for featured projects', () => {
    render(<Projects />);
    
    expect(screen.getByText('FEATURED')).toBeInTheDocument();
  });

  it('displays project metrics', () => {
    render(<Projects />);
    
    expect(screen.getAllByText('95%')).toHaveLength(2); // Both projects have this metric
  });
});