//navigation section
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo from '../assets/CognizenLogo.jpg'

export default function Nav() {
  return (
    <header >
      <div className="bg-white ">
        <Link to="/" className="bg-black h-40 w-full flex items-center">
          <img
            src={CognizenLogo}
            className="h-36 ml-44"
            alt="The Cognizen Logo"
          />
        </Link>

        <div className=" bg-[#222f3d] h-12 flex items-center justify-center">
          <div className=''>
            <NavLink
              to="/"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Articles
            </NavLink>

            <NavLink
              to="/philoneist"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Philoneist
            </NavLink>

            <NavLink
              to="/opinion"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Opinion
            </NavLink>

            <NavLink
              to="/politics"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Politics
            </NavLink>

            <NavLink
              to="/history"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/international"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              International-relations
            </NavLink>

            <NavLink
              to="/search"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>

    </header>
  );
}
