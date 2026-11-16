import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "py-3 px-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-dark";

  const variants = {
    primary: "bg-neon-blue text-bg-dark hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] focus:ring-neon-blue",
    secondary: "bg-transparent border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] focus:ring-neon-pink"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Загрузка...' : children}
    </button>
  );
}