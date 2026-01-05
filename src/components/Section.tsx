import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'dark' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg';
  container?: boolean;
}

/**
 * Reusable Section component for consistent page sections
 * Implements the boxed design system's section structure with proper spacing
 */
export function Section({
  children,
  className = '',
  background = 'default',
  spacing = 'md',
  container = true
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-zinc-950/50',
    dark: 'bg-black',
    gradient: 'bg-gradient-to-b from-zinc-950 to-black'
  };

  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  };

  const content = container ? (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  ) : children;

  return (
    <section className={`${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}>
      {content}
    </section>
  );
}