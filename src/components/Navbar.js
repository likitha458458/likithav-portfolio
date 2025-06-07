import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaFileAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

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
        {/* Left Logo with Lv */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <div className="
            bg-[#161B22] w-10 h-10 flex items-center justify-center rounded-full border border-[#58A6FF]
            text-[#58A6FF] font-bold text-2xl
            shadow-md
            transition-colors duration-300
            hover:bg-[#58A6FF] hover:text-[#161B22]
            cursor-pointer
          ">
            Lv
          </div>
        </Link>

        {/* Navigation Links */}
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

        {/* Mobile menu button placeholder (optional) */}
        {/* <div className="md:hidden">
          <button className="text-[#8B949E]">
            <svg ... />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
