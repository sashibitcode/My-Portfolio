import React from 'react';

interface DotMatrixProps {
  rows?: number;
  cols?: number;
  className?: string;
  dotSize?: string;
}

export const DotMatrix: React.FC<DotMatrixProps> = ({
  rows = 5,
  cols = 5,
  className = '',
  dotSize = 'w-1.5 h-1.5',
}) => {
  return (
    <div
      className={`inline-grid gap-2 select-none pointer-events-none ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className={`${dotSize} rounded-full bg-navy/25 inline-block`}
        />
      ))}
    </div>
  );
};
