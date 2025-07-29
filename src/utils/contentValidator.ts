// Content validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.length >= 10;
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate personal data
 */
export function validatePersonalData(data: any): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Basic info validation
  if (!data.basicInfo?.name) {
    errors.push('Name is required');
  }
  
  if (!data.basicInfo?.email || !validateEmail(data.basicInfo.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.basicInfo?.phone || !validatePhone(data.basicInfo.phone)) {
    errors.push('Valid phone number is required');
  }

  // Professional info validation
  if (!data.professional?.summary) {
    errors.push('Professional summary is required');
  } else if (data.professional.summary.length < 100) {
    warnings.push('Professional summary should be more detailed');
  }

  if (!data.professional?.specializations || data.professional.specializations.length === 0) {
    errors.push('At least one specialization is required');
  }

  // Social links validation
  Object.entries(data.social || {}).forEach(([platform, url]) => {
    if (url && !validateUrl(url as string)) {
      errors.push(`Invalid ${platform} URL`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate project data
 */
export function validateProjectData(projects: any[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  projects.forEach((project, index) => {
    if (!project.title) {
      errors.push(`Project ${index + 1}: Title is required`);
    }
    
    if (!project.description) {
      errors.push(`Project ${index + 1}: Description is required`);
    }
    
    if (!project.technologies || project.technologies.length === 0) {
      errors.push(`Project ${index + 1}: At least one technology is required`);
    }
    
    if (project.githubUrl && !validateUrl(project.githubUrl)) {
      errors.push(`Project ${index + 1}: Invalid GitHub URL`);
    }
    
    if (project.liveUrl && !validateUrl(project.liveUrl)) {
      errors.push(`Project ${index + 1}: Invalid live URL`);
    }
    
    if (!project.metrics || project.metrics.length === 0) {
      warnings.push(`Project ${index + 1}: Consider adding metrics to showcase impact`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate experience data
 */
export function validateExperienceData(experiences: any[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  experiences.forEach((exp, index) => {
    if (!exp.title) {
      errors.push(`Experience ${index + 1}: Job title is required`);
    }
    
    if (!exp.company) {
      errors.push(`Experience ${index + 1}: Company name is required`);
    }
    
    if (!exp.duration) {
      errors.push(`Experience ${index + 1}: Duration is required`);
    }
    
    if (!exp.description) {
      errors.push(`Experience ${index + 1}: Description is required`);
    }
    
    if (!exp.achievements || exp.achievements.length === 0) {
      warnings.push(`Experience ${index + 1}: Consider adding specific achievements`);
    }
    
    if (!exp.technologies || exp.technologies.length === 0) {
      warnings.push(`Experience ${index + 1}: Consider adding technologies used`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Check for broken links
 */
export async function checkLinks(urls: string[]): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const url of urls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        errors.push(`Broken link: ${url} (${response.status})`);
      }
    } catch (error) {
      errors.push(`Failed to check link: ${url}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Validate content consistency
 */
export function validateContentConsistency(data: {
  personal: any;
  contact: any;
  projects: any[];
  experience: any[];
}): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check email consistency
  if (data.personal.basicInfo?.email !== data.contact.email) {
    errors.push('Email mismatch between personal and contact data');
  }

  // Check phone consistency
  if (data.personal.basicInfo?.phone !== data.contact.phone) {
    errors.push('Phone number mismatch between personal and contact data');
  }

  // Check social links consistency
  const personalSocial = data.personal.social || {};
  const contactSocial = data.contact.socialLinks || [];
  
  contactSocial.forEach((link: any) => {
    const platform = link.name.toLowerCase();
    if (personalSocial[platform] && personalSocial[platform] !== link.href) {
      warnings.push(`${link.name} URL mismatch between personal and contact data`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Run comprehensive content validation
 */
export async function validateAllContent(): Promise<ValidationResult> {
  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  try {
    // Import all data (this would need to be adapted for your specific setup)
    const { personalData } = await import('../data/personal');
    const { contactInfo, socialLinks } = await import('../data/contact');
    const { projects } = await import('../data/projects');
    const { experiences } = await import('../data/experience');

    // Validate each data type
    const personalValidation = validatePersonalData(personalData);
    const projectValidation = validateProjectData(projects);
    const experienceValidation = validateExperienceData(experiences);
    const consistencyValidation = validateContentConsistency({
      personal: personalData,
      contact: { ...contactInfo, socialLinks },
      projects,
      experience: experiences
    });

    // Collect all errors and warnings
    allErrors.push(...personalValidation.errors);
    allErrors.push(...projectValidation.errors);
    allErrors.push(...experienceValidation.errors);
    allErrors.push(...consistencyValidation.errors);

    allWarnings.push(...personalValidation.warnings);
    allWarnings.push(...projectValidation.warnings);
    allWarnings.push(...experienceValidation.warnings);
    allWarnings.push(...consistencyValidation.warnings);

    // Check external links
    const allUrls = [
      ...socialLinks.map((link: any) => link.href),
      ...projects.filter((p: any) => p.githubUrl).map((p: any) => p.githubUrl),
      ...projects.filter((p: any) => p.liveUrl).map((p: any) => p.liveUrl)
    ];

    const linkValidation = await checkLinks(allUrls);
    allErrors.push(...linkValidation.errors);
    allWarnings.push(...linkValidation.warnings);

  } catch (error) {
    allErrors.push(`Failed to validate content: ${error}`);
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
}