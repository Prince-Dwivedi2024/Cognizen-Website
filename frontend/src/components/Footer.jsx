//footer section
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png'
// import '@fontawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className=" bg-green-900 text-white ">
      <div className="container ">
        <div className="flex justify-between items-start ">
          {/* Logo and description */}
          <div className='flex  items-center '>
          <Link to="/" className="bg-green-900 ">
          <img
            src={CognizenLogo2}
            className="h-40 w-full pl-[8vh]"
            alt="The Cognizen Logo"
          />
          </Link>
            {/* Discription */}
            <div className='ml-4 text-white flex flex-col items-center p-10 pl-[10vw]'>
              <h1 className="text-4xl mb-2 font-extrabold font-jacquard">Cognizen Club NITR</h1>
              <p className= "font-semibold font-serif text-mid ">The official politics and economics</p>
              <p className= "font-semibold font-serif text-mid">awareness club of NIT Rourkela.</p>
              </div>
         
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className=" font-extrabold mb-4 font-serif text-2xl">Follow Us</h3>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
