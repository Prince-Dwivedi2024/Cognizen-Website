//navigation section
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {

  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header >
      <div className="bg-black ">

        <div className="bg-black py-[3vh] flex items-center  ">
          <Link to="/" >
            <img
              src={CognizenLogo}
              className="h-36 pl-[8vw]"
              alt="The Cognizen Logo"
            />
          </Link>

          {/* Description */}
          <div className='ml-4 text-white flex flex-col items-center p-10 pl-[10vw]'>
            <h1 className="text-6xl mb-2 font-extrabold font-jacquard">Cognizen Club NITR</h1>
            <p className='font-semibold font-serif text-xl'>The official politics and economics </p>
            <p className='font-semibold font-serif text-xl'>awareness club of NIT Rourkela.</p>
          </div>
        </div>


        <div className=" ">
          <div className=' font-sans font-extrabold bg-[#222f3d] h-12 flex items-center justify-center'>
            {/* Home section */}
            <NavLink
              to="/"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              <i className="fas fa-home mr-2"></i>
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
              Reviews
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
              World
            </NavLink>
            <NavLink
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Archive
            </NavLink>

            <NavLink
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Achievements
            </NavLink>
            <div className="relative group">
              <div

                className=
                "text-[#FFFFFF] hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2 flex items-center "

              >
                About us
                <i className="fas fa-caret-down ml-2"></i>
              </div>

              <div className="absolute left-0 mt-2 w-30 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
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