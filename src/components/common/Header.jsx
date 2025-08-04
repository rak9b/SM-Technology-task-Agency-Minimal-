import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { text: 'Home', href: '#home' },
    { text: 'Advertise', href: '#advertise' },
    { text: 'Supports', href: '#supports' },
    { text: 'Contact', href: '#contact' },
    { text: 'About us', href: '#about' }
  ];

  return (
    <header className="w-full bg-global-6">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start py-4 md:py-6 mr-0 md:mr-[48px]">
          {/* Logo Section */}
          <div className="flex gap-[14px] justify-center items-center w-full md:w-auto">
            <img 
              src="/images/img_group.png" 
              className="w-[26px] h-[36px]" 
              alt="Builderz Logo" 
            />
            <h1 className="font-pacifico text-[16px] md:text-[20px] font-normal leading-[20px] md:leading-[24px] text-left text-header-1 mb-[4px] self-end">
              Builderz
            </h1>
          </div>

          {/* Custom Navigation Bar (absolute positioned) */}
          <nav
            className="w-[502px] h-[33px] flex items-center justify-center opacity-100"
            style={{ position: 'absolute', top: '28.5px', left: '709px', transform: 'rotate(0deg)' }}
          >
            <ul className="flex space-x-8 text-center align-middle font-heebo font-normal text-[16px] leading-[33px] tracking-[0px]">
              <li>Home</li>
              <li>Adversite <span className="ml-1"></span></li>
              <li>Supports <span className="ml-1"></span></li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </nav>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block md:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6 text-global-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Navigation Menu */}
          {/* ...existing code... */}
        </div>
      </div>
    </header>
  );
};

export default Header;