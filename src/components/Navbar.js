import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaUser, FaProjectDiagram, FaTools, FaFileAlt, FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUser /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Experience', path: '/Experience', icon: <FaTools /> },
    { name: 'Resume', path: '/resume', icon: <FaFileAlt /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/90 backdrop-blur-md shadow-sm border-b border-[#161B22]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <div className="bg-[#161B22] w-10 h-10 flex items-center justify-center rounded-full border border-[#58A6FF] text-[#58A6FF] font-bold text-2xl shadow-md transition-colors duration-300 hover:bg-[#58A6FF] hover:text-[#161B22] cursor-pointer">
            Lv
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-[#8B949E]">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-1 hover:text-[#58A6FF] transition ${
                  location.pathname === item.path ? 'text-[#58A6FF] font-semibold' : ''
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#8B949E] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-[#0D1117] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-[#8B949E]">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 hover:text-[#58A6FF] transition ${
                  location.pathname === item.path ? 'text-[#58A6FF] font-semibold' : ''
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
