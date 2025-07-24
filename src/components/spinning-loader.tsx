import React from 'react';
import clsx from 'clsx';

interface SpinningLoaderProps {
  size?: number; // size in pixels
  className?: string;
}

const SpinningLoader: React.FC<SpinningLoaderProps> = ({ size = 24, className }) => {
  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-4 border-gray-300 border-t-blue-500',
        className
      )}
      style={{ width: size, height: size }}
    />
  );
};

export default SpinningLoader;
