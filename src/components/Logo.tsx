import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-24'
  };
  
  return (
    <div className="flex items-center">
      <img 
        src="https://i.ibb.co/B5v5JSXH/CEei-P4-QV5-W8-removebg-preview-1.png" 
        alt="Doc Motors" 
        className={`${sizeClasses[size]}`} 
      />
    </div>
  );
};

export default Logo;