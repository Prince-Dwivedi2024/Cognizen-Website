// Nav.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import CampusNITR from '../assets/CampusNITR.jpg';
import ThemeToggle from './ThemeToggle';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false); // State for About Us dropdown
  const [searchResults, setSearchResults] = useState([]);
  const searchBarRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate at the top level

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSearchBar(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior if it's triggered from a form
    const searchKey = e.target.searchInput.value; // Access the input value

    try {
      const response = await fetch(`https://cognizen-website.onrender.com/search/${encodeURIComponent(searchKey)}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log(data);

      setSearchResults(data);
      navigate('/search', { state: { searchResults: data } });

    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  useEffect(() => {

    // Added this block to retrieve and apply the saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

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
      <div className="bg-white dark:bg-gray-900">
        {/* top */}
        <div
          className="relative h-[150px] sm:h-[200px] md:h-[250px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${CampusNITR})` }}
        >
          <Link to="/">
          <img src={CognizenLogo2} className="h-16 sm:h-20 md:h-36 pl-4 sm:pl-[5vw] md:pl-[8vw]" alt="The Cognizen Logo" />

          </Link>
          <div className="ml-4 text-white flex flex-col items-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl mb-1 sm:mb-2 font-extrabold font-raleway text-center sm:text-left">
  Cognizen Club NITR
</h1>
<p className="text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left">The official politics and economics</p>
<p className="text-sm sm:text-base md:text-lg font-semibold text-center sm:text-left">awareness club of NIT Rourkela.</p>

          </div>

          {/* Added the ThemeToggle component */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50">
        <ThemeToggle />
      </div>
          
        </div>

        {/* nav */}
        <div className="relative">
        <div className="bg-[#222f3d] h-10 sm:h-12 flex items-center justify-between px-2 sm:px-4 lg:px-0">

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
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                <i className="fas fa-home mr-2"></i>
              </NavLink>

              <NavLink
                to="/politics"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Politics
              </NavLink>

              <NavLink
                to="/philoneist"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Philoneist
              </NavLink>

              <NavLink
                to="/opinion"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Opinion
              </NavLink>

              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Reviews
              </NavLink>

              <NavLink
                to="/history"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                History
              </NavLink>

              <NavLink
                to="/world"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                World
              </NavLink>

              <NavLink
                to="/archives"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Archive
              </NavLink>

              <NavLink
                to="/achievement"
                className={({ isActive }) =>
                  `text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center ${isActive ? 'bg-[#222f3d]' : ''}`
                }
              >
                Achievements
              </NavLink>

              <div className="relative group">
                <div className="text-[#FFFFFF] hover:text-orange-500 hover:underline cursor-pointer font-medium text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 flex items-center">
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
                  <form onSubmit={handleSearch} className="flex w-full items-center">
                    <input
                      type="text"
                      name="searchInput" // Ensure this matches the input name used in handleSearch
                      className="bg-white text-black p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-l-md"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 text-white p-2 ml-2 rounded-r-md"
                    >
                      Search
                    </button>
                  </form>
                </div>
                
                )}
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden fixed inset-0 bg-[#708364] flex flex-col items-center justify-center p-4 sm:p-8 z-50">
              <button
                className="text-white text-3xl absolute top-4 right-4"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
              <nav className="flex flex-col items-center">
                {/* Mobile NavLinks here */}
                <NavLink to="/" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/politics" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Politics</NavLink>
                <NavLink to="/philoneist" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Philoneist</NavLink>
                <NavLink to="/opinion" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Opinion</NavLink>
                <NavLink to="/reviews" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Reviews</NavLink>
                <NavLink to="/history" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>History</NavLink>
                <NavLink to="/world" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>World</NavLink>
                <NavLink to="/archives" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Archives</NavLink>
                <NavLink to="/achievement" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Achievements</NavLink>
                {/* About Us link in mobile view */}
               <div className="text-white text-lg py-2 cursor-pointer hover:text-orange-200" onClick={() => setAboutUsOpen(!aboutUsOpen)}>
                  About Us
                  <i className="fas fa-caret-down ml-2"></i>
                </div>
                {aboutUsOpen && (
                  <div className="flex flex-col items-center">
                    <NavLink to="/leadership" className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[12px] sm:text-[14px]" onClick={() => setMenuOpen(false)}>Leadership</NavLink>
                    <NavLink to="/team" className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[12px] sm:text-[14px]" onClick={() => setMenuOpen(false)}>Team</NavLink>
                    <NavLink to="/alumni" className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[12px] sm:text-[14px]" onClick={() => setMenuOpen(false)}>Alumni</NavLink>
                    <NavLink to="/more" className="block px-4 py-1 hover:bg-orange-500 hover:text-black text-[12px] sm:text-[14px]" onClick={() => setMenuOpen(false)}>More</NavLink>
                  </div>
                )}
                <NavLink to="/adminlogin" className="text-white text-lg py-2" onClick={() => setMenuOpen(false)}>Admin</NavLink>

                {/* search bar for mobile view */}
                <div className="relative ml-8" ref={searchBarRef}>
                  <div
                    className="text-[#FFFFFF] flex items-center hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2"
                    onClick={() => setShowSearchBar(!showSearchBar)}
                  >
                    <i className="fas fa-search"></i>
                  </div>
                  {showSearchBar && (
                    <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 w-64  flex items-center bg-transparent z-50">
                      <form onSubmit={handleSearch} className="flex w-full items-center">
                        <input
                          type="text"
                          name="searchInput"
                          className="bg-white text-black text-xs sm:text-sm p-1 sm:p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-l-md"
                          placeholder="Search..."
                        />
                        <button
                          type="submit"
                          className="bg-orange-500 text-white p-2 ml-2 rounded-r-md"
                        >
                          Search
                        </button>
                      </form>
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
