import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 border border-ink dark:border-bone bg-ink text-paper dark:bg-bone dark:text-carbon font-mono text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
      <Check className="w-3.5 h-3.5 text-signal" />
      <span>{message}</span>
    </div>
  );
};
