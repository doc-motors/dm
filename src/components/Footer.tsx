import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-dark border-t border-gray-800 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="md" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © {currentYear} Doc Motors. Все права защищены.
            </p>
            <p className="text-gray-500 text-sm">
              Промышленный пер., 9, д. Кукуевка, Курская область
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;