//Nav bar section.

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import CampusNITR from '../assets/CampusNITR.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false); // State for About Us dropdown
  const searchBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSearchBar(false);
    }
  };

  useEffect(() => {
    if (showSearchBar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchBar]);

  return (
    <header>
      <div className="bg-white">
        {/* top */}
        <div
          className="relative h-[250px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${CampusNITR})` }}
        >
          <Link to="/">
            <img
              src={CognizenLogo2}
              className="h-36 pl-[8vw]"
              alt="The Cognizen Logo"
            />
          </Link>
          <div className="ml-4 text-white flex flex-col items-center">
            <h1 className="text-3xl mb-2 font-extrabold font-raleway">
              Cognizen Club NITR
            </h1>
            <p className="font-semibold">The official politics and economics</p>
            <p className="font-semibold">awareness club of NIT Rourkela.</p>
          </div>
        </div>

        {/* nav */}
        <div className="relative">
          <div className="bg-[#222f3d] h-12 flex items-center justify-between px-4 lg:px-0">
            <button
              className="text-[#FFFFFF] text-2xl lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className={`lg:flex items-center justify-center w-full ${menuOpen ? 'block' : 'hidden'}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                <i className="fas fa-home mr-2"></i> 
              </NavLink>

              <NavLink
                to="/politics"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Politics
              </NavLink>


              <NavLink
                to="/philoneist"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Philoneist
              </NavLink>

              <NavLink
                to="/opinion"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Opinion
              </NavLink>

              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Reviews
              </NavLink>

              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                History
              </NavLink>

              <NavLink
                to="/world"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                World
              </NavLink>
              <NavLink
                to="/archives"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Archive
              </NavLink>

              <NavLink
                to="/achievement"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Achievements
              </NavLink>

              <div className="relative group">
                <div className="text-[#FFFFFF] hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2 flex items-center">
                  About Us
                  <i className="fas fa-caret-down ml-2"></i>
                </div>

                <div className="absolute left-0 mt-2 w-30 bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
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
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-sm px-4 py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Admin
              </NavLink>

              <div className="relative ml-8" ref={searchBarRef}>
                <div
                  className="text-[#FFFFFF] flex items-center hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2"
                  onClick={() => setShowSearchBar(!showSearchBar)}
                >
                  <i className="fas fa-search"></i>
                </div>
                {showSearchBar && (
                  <div className="absolute right-0 mt-2 w-64 p-2 flex items-center bg-transparent z-50">
                    <input
                      type="text"
                      className="bg-white text-black p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Search..."
                    />
                    <button className="bg-orange-500 text-white p-2 ml-2">
                      Search
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden fixed inset-0 bg-[#708364] flex flex-col items-center justify-center z-50">
              <button
                className="text-white text-3xl absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <nav className="flex flex-col items-center">
                <NavLink
                  to="/"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/philoneist"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Philoneist
                </NavLink>
                <NavLink
                  to="/opinion"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Opinion
                </NavLink>
                <NavLink
                  to="/reviews"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Reviews
                </NavLink>
                <NavLink
                  to="/history"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  History
                </NavLink>
                <NavLink
                  to="/international"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  World
                </NavLink>
                <NavLink
                  to="/archives"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Archive
                </NavLink>
                <NavLink
                  to="/achievement"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Achievements
                </NavLink>
                <div className="relative">
                  <div
                    className="text-white text-2xl py-2 cursor-pointer flex items-center"
                    onClick={() => setAboutUsOpen(!aboutUsOpen)}
                  >
                    About Us
                    <i className="fas fa-caret-down ml-2"></i>
                  </div>
                  {aboutUsOpen && (
                    <div className="absolute left-0 mt-2 w-30 bg-black text-white text-sm z-40">
                      <NavLink
                        to="/leadership"
                        className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                        onClick={() => setMenuOpen(false)}
                      >
                        Leadership
                      </NavLink>
                      <NavLink
                        to="/team"
                        className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                        onClick={() => setMenuOpen(false)}
                      >
                        Team
                      </NavLink>
                      <NavLink
                        to="/alumni"
                        className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                        onClick={() => setMenuOpen(false)}
                      >
                        Alumni
                      </NavLink>
                      <NavLink
                        to="/more"
                        className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[14px]"
                        onClick={() => setMenuOpen(false)}
                      >
                        More
                      </NavLink>
                    </div>
                  )}
                </div>
                <NavLink
                  to="/adminlogin"
                  className="text-white text-2xl py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin
                </NavLink>
                <div className="relative ml-8" ref={searchBarRef}>
                  <div
                    className="text-white text-2xl py-2 cursor-pointer"
                    onClick={() => setShowSearchBar(!showSearchBar)}
                  >
                    <i className="fas fa-search"></i>
                  </div>
                  {showSearchBar && (
                    <div className="absolute right-0 mt-2 w-64 p-2 flex items-center bg-transparent z-50">
                      <input
                        type="text"
                        className="bg-white text-black p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Search..."
                      />
                      <button className="bg-orange-500 text-white p-2 ml-2">
                        Search
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}