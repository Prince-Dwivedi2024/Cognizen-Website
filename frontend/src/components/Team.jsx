import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import CampusNITR from '../assets/CampusNITR.jpg';

const Team = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const url = new URL('https://cognizen-website.onrender.com/members');
      url.searchParams.append('type', 'currentMember');

      const response = await fetch(url, { method: 'GET' });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error);
    } finally {
      setLoading(false);
    }
  };

  const MemberCard = ({ member }) => {
    const { photo, name, passingBatch, id, position, mediumId, instagramId, XId, email } = member;
  
    return (
      <div className="bg-[#F0F4F8] p-8 rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:shadow-2xl w-80 h-[290px]">
        <div className="flex items-center mb-4">
          <div className="relative h-32 w-32 rounded-full border-4 border-gray-300 overflow-hidden shadow-lg">
            <img
              src={photo}
              alt={name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-base font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">batch of  {passingBatch}</p>
            {/* <p className="text-gray-800 font-semibold text-sm mb-2">id - {id}</p> */}
          </div>
        </div>
        <p className="text-gray-800 font-bold mb-2">{position}</p>
        <div className="flex flex-wrap gap-2">
          {mediumId && <a href={mediumId} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">Medium</a>}
          {instagramId && <a href={instagramId} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">Instagram</a>}
          {XId && <a href={XId} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">X</a>}
          {email && <a href={`mailto:${email}`} className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">Email</a>}
        </div>
      </div>
    );
  };
  


  return (
    <>
      <div className="min-h-screen bg-[#F0F4F8]">
        <div className="relative h-[280px] bg-cover bg-center" style={{ backgroundImage: `url(${CampusNITR})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-between h-full px-16 text-white">
            <img src={CognizenLogo2} alt="Cognizen Club Logo" className="h-1/2" />
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3 text-center font-raleway space-y-4">
              <h1 className="text-4xl font-medium">Let's meet</h1>
              <h1 className="text-4xl font-medium">our</h1>
              <h1 className="text-4xl font-medium">Team Members</h1>
            </div>
            <div className="absolute top-4 right-4 flex space-x-4">
              <Link to="/" className="text-md font-medium px-4 py-2 hover:underline">home</Link>
              <Link to="/leadership" className="text-md font-medium px-4 py-2 hover:underline">leadership</Link>
              <Link to="/alumni" className="text-md font-medium px-4 py-2 hover:underline">alumni</Link>
              <Link to="/more" className="text-md font-medium px-4 py-2 hover:underline">more</Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-[8vh] bg-[#e9e7e7]">
          <div className="py-8 w-4/5">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#222f3d] font-raleway">"Innovate, Collaborate, Succeed"</h2>
            <div className="flex flex-col items-center space-y-8">
              {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                  <div className="w-48 h-48 border-4 border-blue-500 border-t-transparent border-t-4 border-r-transparent border-r-4 rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  {members.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 justify-items-center">
                      {members.map((member, index) => (
                        <MemberCard key={index} member={member} />
                      ))}
                    </div>
                    :
                    <div></div>
                  }
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
