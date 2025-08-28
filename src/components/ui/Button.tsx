import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`bg-white text-black text-sm px-6 py-2 rounded-md shadow hover:scale-105 transition-transform ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
