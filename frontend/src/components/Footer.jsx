import React from 'react';
import { Link } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#d8d1d1] dark:bg-[#1E1E1E] text-black dark:text-[#F5F5F5] p-4 sm:p-6 font-inter font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 px-2 sm:px-4 md:px-12">
        {/* Logo and description */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <Link to="/" className="mb-2 md:mb-0">
            <img
              src={CognizenLogo2}
              className="h-20 sm:h-24 md:h-36"
              alt="The Cognizen Logo"
            />
          </Link>
          <div className="mt-2 md:mt-0 md:ml-4 font-normal">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Cognizen Club NITR</h1>
            <p className="text-sm sm:text-base">The official politics and economics</p>
            <p className="text-sm sm:text-base">awareness club of NIT Rourkela.</p>
            <p className="text-sm sm:text-base">Contact us: <span className="font-semibold cursor-pointer text-teal-950 dark:text-teal-400">cognizenclub.nitr@gmail.com</span></p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start px-2 sm:px-4 py-3">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Follow Us</h3>
          <div className="flex space-x-3 sm:space-x-4">
            <a href="https://www.facebook.com" className="text-black dark:text-[#F5F5F5] bg-orange-100 dark:bg-orange-700 p-2 rounded-full hover:bg-orange-300 dark:hover:bg-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-black dark:text-[#F5F5F5] bg-orange-100 dark:bg-orange-700 p-2 rounded-full hover:bg-orange-300 dark:hover:bg-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-black dark:text-[#F5F5F5] bg-orange-100 dark:bg-orange-700 p-2 rounded-full hover:bg-orange-300 dark:hover:bg-orange-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" className="text-black dark:text-[#F5F5F5] bg-orange-100 dark:bg-orange-700 p-2 rounded-full hover:bg-orange-300 dark:hover:bg-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" className="text-black dark:text-[#F5F5F5] bg-orange-100 dark:bg-orange-700 p-2 rounded-full hover:bg-orange-300 dark:hover:bg-orange-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 dark:border-gray-600 pt-4 text-center">
        <p className="text-xs sm:text-sm">&copy; 2024 Cognizen Club NITR. All rights reserved.</p>
        <p className="text-xs">Created with love by <a href="https://github.com/Prince-Dwivedi2024" className="text-teal-950 dark:text-teal-400">Prince</a>, <a href="" className="text-teal-950 dark:text-teal-400">Zeeshan</a> and Cognizen team</p>
      </div>
    </footer>
  );
};

export default Footer;
