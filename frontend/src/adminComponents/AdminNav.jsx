//navigation section for admin tab
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo2 from '../assets/CognizenLogo2.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Nav() {

  const [showSearchBar, setShowSearchBar] = useState(false);
  const logout = () => {
    localStorage.removeItem('admin');
    window.location = "/";
  };

  return (
    <header >
      <div className="bg-white ">

        <div className="flex justify-between bg-[#222f3d] px-6 ">
          <div className=' p-[1vh] flex items-center justify-center'>

            {/* title */}
            <div className='border-2px-black flex flex-start items-center text-white text-4xl px-3 font-bold gap-3 font-inter font-sans'>
              <img src={CognizenLogo2} className='h-[70px]' />
              <div>
                <p>Cognizen</p>
                <p className='text-sm'>ADMIN PAGE</p>
              </div>
            </div>

            {/* Home section */}
            <div>
              <NavLink
                to="/admin"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Article
              </NavLink>

              <NavLink
                to="/adminAchievement"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Achievement
              </NavLink>

              <NavLink
                to="/adminLeadership"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Leadership
              </NavLink>

              <NavLink
                to="/adminAlumni"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Alumni
              </NavLink>

              <NavLink
                to="/adminTeam"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Team
              </NavLink>


              <NavLink
                to="/adminNotice"
                className={(isActive) =>
                  `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-md px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                  }`
                }
              >
                Notice
              </NavLink>

            </div>
          </div>
          <NavLink
            onClick={logout}
            className={(isActive) =>
              `text-[#fc4747]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-xl px-4 py-2  flex items-center ${isActive ? 'bg-[#222f3d]' : 'underline'
              }`
            }
          >
            <div>Logout</div>
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
}