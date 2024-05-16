//footer section

import React from 'react';
import { Link } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';

const Footer = () => {
  return (
    <footer className=" bg-green-900 text-white ">
      <div className="container  ">
        <div className="flex justify-between items-start ">
          {/* Logo and description */}
          <div className='flex  items-start'>
          <Link to="/" className="bg-green-900 ">
          <img
            src={CognizenLogo2}
            className="h-36 ml-"
            alt="The Cognizen Logo"
          />
          </Link>
            {/* Discription */}
            <div className='ml-4'>
              <h1 className="text-2xl mb-2">Cognizen Club NITR</h1>
              <p>The official politics and economics</p>
              <p>awareness club of NIT Rourkela.</p>
              </div>
         
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-extrabold font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="text-[#FFFFFF] hover:text-blue-800">
                <i className="fab fa-facebook-f p-3 rounded-full  bg-orange-500 w-12 h-12 flex items-center justify-center"></i>
              </a>
              <a href="https://www.twitter.com" className="text-[#FFFFFF] hover:text-blue-800">
                <i className="fab fa-twitter p-3 rounded-full  bg-orange-500 w-12 h-12 flex items-center justify-center"></i>
              </a>
              <a href="https://www.linkedin.com" className="text-[#FFFFFF] hover:text-blue-800">
                <i className="fab fa-linkedin-in p-3 rounded-full  bg-orange-500 w-12 h-12 flex items-center justify-center"></i>
              </a>
              <a href="https://www.instagram.com" className="text-[#FFFFFF] hover:text-blue-800">
                <i className="fab fa-instagram p-3 rounded-full  bg-orange-500 w-12 h-12 flex items-center justify-center"></i>
              </a>
              <a href="https://www.youtube.com" className="text-[#FFFFFF] hover:text-blue-800">
                <i className="fab fa-youtube p-3 rounded-full  bg-orange-500 w-12 h-12 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Cognizen Club NITR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  
