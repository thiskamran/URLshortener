import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  disabled = false, 
  isLoading = false,
  onClick,
  className = ''
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 ${className}`}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;