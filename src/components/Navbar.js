import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setDirection, setShowBlackScreen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsExpanded(true), 800);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'MobileView', to: '/mobile' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact', to: '/contact' },
  ];
const routeOrder = ['/', '/about', '/mobile', '/skills', '/projects', '/experience', '/contact'];

  const handleNavigate = (to) => {
  const currentIdx = routeOrder.indexOf(location.pathname);
  const targetIdx = routeOrder.indexOf(to);

  if (to === '/' && location.pathname !== '/') {
    setDirection('backward');
  } else if (targetIdx > currentIdx) {
    setDirection('forward');
  } else {
    setDirection('backward');
  }

  setShowBlackScreen(true);
  setTimeout(() => {
    navigate(to);
    setShowBlackScreen(false);
  }, 500);
};

const pagesWithWhiteNavbar = ['/about', '/projects','/contact'];
const isAboutPage = pagesWithWhiteNavbar.includes(location.pathname);

return (
  <nav
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out
    ${isExpanded ? 'w-[90%] md:w-[80%] px-6 py-4' : 'w-[60px] h-[60px] p-0'}
    ${isScrolled ? (isAboutPage ? 'bg-white/90' : 'bg-black/90') : (isAboutPage ? 'bg-white/90' : 'bg-black/70')}
    rounded-[50px] overflow-hidden`}
  >
    <div className="relative">
      <div className={`hidden md:flex justify-center items-center space-x-10 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigate(item.to)}
            className={`group ${isAboutPage ? 'text-black' : 'text-white'} font-semibold text-lg relative transition-all duration-300 hover:opacity-70 transform hover:-translate-y-1 hover:scale-105`}
          >
            {item.name}
            <span className={`absolute left-0 -bottom-1 h-0.5 w-0 ${isAboutPage ? 'bg-black' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
          </button>
        ))}
      </div>

      <div className="md:hidden flex justify-end items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`${isAboutPage ? 'text-black' : 'text-white'} focus:outline-none`}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden flex flex-col items-center mt-4 gap-4 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigate(item.to)}
            className={`${isAboutPage ? 'text-black' : 'text-white'} text-lg font-medium hover:opacity-70 transition duration-300`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  </nav>
);
}
export default Navbar;
