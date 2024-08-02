import React from 'react';
import { Link } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#d8d1d1] text-black p-6 font-inter font-sans">
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-12">
        {/* Logo and description */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="mr-4">
            <img
              src={CognizenLogo2}
              className="h-24 md:h-36"
              alt="The Cognizen Logo"
            />
          </Link>
          {/* Description */}
          <div className="ml-0 md:ml-4 font-normal text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Cognizen Club NITR</h1>
            <p>The official politics and economics</p>
            <p>awareness club of NIT Rourkela.</p>
            <p>Contact us: <span className="font-semibold cursor-pointer text-teal-950">cognizenclub.nitr@gmail.com</span></p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start px-4 py-3">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-[#FFFFFF] hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-[#FFFFFF] hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-[#FFFFFF] hover:text-orange-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com" className="text-[#FFFFFF] hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com" className="text-[#FFFFFF] hover:text-orange-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Cognizen Club NITR. All rights reserved.</p>
        <p className="text-xs">Created with love by Prince, Zeeshan and Cognizen team</p>
      </div>
    </footer>
  );
};

export default Footer;
