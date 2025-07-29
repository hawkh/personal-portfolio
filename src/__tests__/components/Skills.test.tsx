import { render, screen } from '../../utils/testUtils';
import Skills from '../../components/Skills';

// Mock the skills data
jest.mock('../../data/skills', () => ({
  skillCategories: [
    {
      name: 'Machine Learning',
      icon: 'CpuChipIcon',
      color: '#3B82F6',
      skills: [
        { name: 'PyTorch', proficiency: 90 },
        { name: 'TensorFlow', proficiency: 85 }
      ]
    },
    {
      name: 'Programming',
      icon: 'CommandLineIcon', 
      color: '#10B981',
      skills: [
        { name: 'Python', proficiency: 95 },
        { name: 'JavaScript', proficiency: 80 }
      ]
    }
  ]
}));

describe('Skills Component', () => {
  it('renders skills section with title', () => {
    render(<Skills />);
    
    expect(screen.getByText('Technical Expertise')).toBeInTheDocument();
    expect(screen.getByText('Cutting-edge technologies powering intelligent solutions')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<Skills />);
    
    expect(screen.getByText('Machine Learning')).toBeInTheDocument();
    expect(screen.getByText('Programming')).toBeInTheDocument();
  });

  it('renders individual skills', () => {
    render(<Skills />);
    
    expect(screen.getByText('PyTorch')).toBeInTheDocument();
    expect(screen.getByText('TensorFlow')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Skills />);
    
    const section = screen.getByText('Technical Expertise').closest('section');
    expect(section).toHaveAttribute('id', 'skills');
  });

  it('applies hover effects to skill cards', () => {
    render(<Skills />);
    
    const skillCards = screen.getAllByText(/Machine Learning|Programming/);
    skillCards.forEach(card => {
      const cardElement = card.closest('div');
      expect(cardElement).toHaveClass('group');
    });
  });
});