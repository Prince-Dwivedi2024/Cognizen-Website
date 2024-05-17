//footer section

import React from 'react';
import { Link } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#c9c6c6] text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">

          {/* Logo and description */}
          <div className="flex items-center">
            <Link to="/" className="bg-[#c9c6c6]">
              <img
                src={CognizenLogo2}
                className="h-40 w-full pl-[8vh]"
                alt="The Cognizen Logo"
              />
            </Link>
            {/* Description */}
            <div className="ml-4  flex flex-col items-center p-10 pl-[10vw]">
              <h1 className="text-4xl mb-2 font-extrabold font-jacquard">Cognizen Club NITR</h1>
              <p className="font-semibold font-serif text-mid">The official politics and economics</p>
              <p className="font-semibold font-serif text-mid">awareness club of NIT Rourkela.</p>
              <p className="font-semibold font-serif text-mid">Contact us: <span className="font-semibold cursor-pointer text-teal-950">cognizenclub.nitr@gmail.com</span></p>
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
      </div>
      <div className="mt-8 border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Cognizen Club NITR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;