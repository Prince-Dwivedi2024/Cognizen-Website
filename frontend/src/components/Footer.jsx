//footer section

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png'
// import '@fontawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className=" bg-[#d8d1d1] text-black p-[3vh] font-inter font-sans">
      <div className=" flex justify-between px-[5vw] ">

          {/* Logo and description */}
          <div className='flex items-center'>
            <Link to="/" className=" ">
              <img
                src={CognizenLogo2}
                className="h-36 ml-"
                alt="The Cognizen Logo"
              />
            </Link>
            {/* Discription */}
            <div className='ml-4 font-normal'>
              <h1 className="text-2xl font-semibold mb-2">Cognizen Club NITR</h1>
              <p>The official politics and economics</p>
              <p>awareness club of NIT Rourkela.</p>
              <p>Contact us: <span className='font-semibold cursor-pointer text-teal-950'>cognizenclub.nitr@gmail.com</span></p>
            </div>

          </div>

          {/* Social Media Links */}
          <div className='flex flex-col  px-[5vw] py-3'>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
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
      <div className="mt-8  border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Cognizen Club NITR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;