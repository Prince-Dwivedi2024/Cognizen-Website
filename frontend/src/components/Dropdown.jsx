import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
        }
      >
        About us
      </NavLink>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 bg-[#222f3d]" role="menu" aria-orientation="vertical">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                `block text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              History
            </NavLink>
            <NavLink
              to="/international"
              className={({ isActive }) =>
                `block text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#222f3d]' : ''}`
              }
            >
              International-relations
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
