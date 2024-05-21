import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import NITimg3 from '../assets/NITimg3.jpg';
// import Campus from '../assets/Campus.jpg'; 

const More = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F0F4F8]">
        {/* Header Section */}
        <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${NITimg3})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-between h-full px-8 text-white">
            <img src={CognizenLogo2} alt="Cognizen Club Logo" className="h-1/2" style={{ width: '17%' }} />
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3 text-center font-raleway space-y-4">
              <h1 className="text-4xl font-medium">Let's welcome</h1>
              <h1 className="text-4xl font-medium">our</h1>
              <h1 className="text-4xl font-medium">Executive Members</h1>
            </div>
            <div className="absolute top-4 right-4 flex space-x-4">
              <Link to="/" className="text-lg font-medium px-4 py-2 hover:underline">Home</Link>
              <Link to="/leadership" className="text-lg font-medium px-4 py-2 hover:underline">Leadership</Link>
              <Link to="/team" className="text-lg font-medium px-4 py-2 hover:underline">Team</Link>
              <Link to="/alumni" className="text-lg font-medium px-4 py-2 hover:underline">Alumni</Link>
              <Link to="/more" className="text-lg font-medium px-4 py-2 hover:underline">More</Link>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex justify-center">
          <div className="p-8 w-4/5">
            {/* About Us Section */}
            <section className="my-12">
              <h2 className="text-4xl font-bold text-center mb-8 text-[#222f3d]">About Us</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold mb-4">Driving the force of <span className="text-pink-500">assortment</span></h3>
                  <p className="mb-4">For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
                  <h3 className="text-2xl font-bold mb-2">Who am I?</h3>
                  <p className="text-lg">
                    I am <span className="font-bold text-red-600">Zeeshan Sayeed</span>, an undergraduate B.Tech student in <span className="font-bold text-red-600">NIT ROURKELA</span>. I am currently a sophomore. I am well-versed and passionate about coding. My skills include <span className="font-bold text-red-600">DSA in C++, MERN stack development, and Blockchain Development</span>. I am also interested in python and data science. I would look forward to gaining experience in internships in big tech companies and new age startups. Check the links in the footer to reach me.
                  </p>
                </div>
                <div className="md:w-1/2">
                  {/* <img src={Campus} alt="About Us" className="rounded-lg shadow-lg h-1/2" /> */}
                </div>
              </div>
            </section>

           
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default More;
