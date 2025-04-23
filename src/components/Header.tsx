import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo size="md" />
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#services" className="nav-link">Услуги</a></li>
                <li><a href="#about" className="nav-link">О нас</a></li>
                <li><a href="#gallery" className="nav-link">Галерея</a></li>
                <li><a href="#testimonials" className="nav-link">Отзывы</a></li>
                <li><a href="#contact" className="nav-link">Контакты</a></li>
              </ul>
            </nav>
            
            <a href="tel:+79192788777" className="flex items-center text-white font-medium">
              <Phone size={18} className="mr-2 text-primary" />
              +7 (919) 278-87-77
            </a>
          </div>
          
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary-dark border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                <li><a href="#services" className="block py-2 nav-link" onClick={toggleMenu}>Услуги</a></li>
                <li><a href="#about" className="block py-2 nav-link" onClick={toggleMenu}>О нас</a></li>
                <li><a href="#gallery" className="block py-2 nav-link" onClick={toggleMenu}>Галерея</a></li>
                <li><a href="#testimonials" className="block py-2 nav-link" onClick={toggleMenu}>Отзывы</a></li>
                <li><a href="#contact" className="block py-2 nav-link" onClick={toggleMenu}>Контакты</a></li>
              </ul>
            </nav>
            
            <a href="tel:+79192788777" className="flex items-center mt-6 text-white font-medium">
              <Phone size={18} className="mr-2 text-primary" />
              +7 (919) 278-87-77
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;