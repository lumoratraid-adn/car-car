import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable Card component implementing the boxed design system
 * Features consistent spacing, borders, and background separation
 * Based on reference website's structural design patterns
 */
export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md'
}: CardProps) {
  const baseClasses = 'rounded-xl bg-zinc-900/50 backdrop-blur-sm transition-all duration-300';

  const variantClasses = {
    default: 'border border-zinc-700/50 hover:border-zinc-600/50',
    elevated: 'border border-zinc-700/50 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30',
    outlined: 'border-2 border-zinc-600/50 hover:border-zinc-500/50'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}