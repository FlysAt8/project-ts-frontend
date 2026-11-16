import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`w-full max-w-md bg-bg-card/80 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-8 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}