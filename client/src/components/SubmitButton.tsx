import React from 'react';

interface SubmitButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  className = '',
  disabled = false,
  onClick,
}) => {
  const baseStyles = 'w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-200 transition flex items-center justify-center gap-2';
  
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
        {title}
      <span>→</span>
    </button>
  );
};

export default SubmitButton;
