import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-4 px-6 flex items-center justify-between text-gray-300 text-sm w-full">
      {/* Left side */}
      <div className="text-left">
        Created by <span className="font-semibold text-indigo-400">Likitha Vinjam</span>
      </div>

      {/* Center */}
      <div className="text-center text-indigo-400 font-semibold">
        © {new Date().getFullYear()} All rights reserved.
      </div>

      {/* Right side: Icons with links */}
      <div className="flex gap-6 text-indigo-400 text-lg">
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-indigo-600 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/likitha-vinjam-739114156/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/likitha458458"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-indigo-600 transition"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
