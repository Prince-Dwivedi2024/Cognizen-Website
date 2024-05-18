//navigation section
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {
  return (
    <header>
      <div className="bg-white">
        <div className="bg-black py-[3vh] flex items-center font-inter font-sans">
          <Link to="/">
            <img
              src={CognizenLogo2}
              className="h-36 pl-[8vw]"
              alt="The Cognizen Logo"
            />
          </Link>

          <div className='ml-4 text-white flex flex-col items-center'>
            <h1 className="text-2xl mb-2 font-extrabold">Cognizen Club NITR</h1>
            <p className='font-semibold'>The official politics and economics</p>
            <p className='font-semibold'>awareness club of NIT Rourkela.</p>
          </div>
        </div>

        <div className="">
          <div className='bg-[#222f3d] h-12 flex items-center justify-center'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              <i className="fas fa-home mr-2"></i>
            </NavLink>

            <NavLink
              to="/philoneist"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              Philoneist
            </NavLink>

            <NavLink
              to="/opinion"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              Opinion
            </NavLink>

            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              Reviews
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/international"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              World
            </NavLink>
            <NavLink
              to="/archives"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              Archive
            </NavLink>

            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              Achievements
            </NavLink>

            <div className="relative group">
              <div className="text-[#FFFFFF] hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2 flex items-center">
                About us
                <i className="fas fa-caret-down ml-2"></i>
              </div>

              <div className="absolute left-0 mt-2 w-30 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <NavLink
                  to="/leadership"
                  className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                >
                  Leadership
                </NavLink>
                <NavLink
                  to="/team"
                  className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                >
                  Team
                </NavLink>
                <NavLink
                  to="/alumni"
                  className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                >
                  Alumni
                </NavLink>
                <NavLink
                  to="/more"
                  className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                >
                  More
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/adminlogin"
              className={({ isActive }) =>
                `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : 'underline'}`
              }
            >
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
