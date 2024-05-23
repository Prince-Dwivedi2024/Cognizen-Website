//page for all current EB members/Leadership
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CognizenLogo2 from '../assets/CognizenLogo2.png';
import NITimg3 from '../assets/NITimg3.jpg'; 
import Member1 from '../assets/Member1.png'; 
import Member2 from '../assets/Member2.png';
import Member3 from '../assets/Member3.jpeg';
import Member4 from '../assets/Member4.jpeg';
import Member5 from '../assets/Member5.jpeg';
import Member6 from '../assets/Member6.jpeg';
import Member7 from '../assets/Member7.jpeg';
import Member8 from '../assets/Member8.jpeg';
import Member9 from '../assets/Member9.jpeg';

const members = [
  { name: 'Leah Nichols', location: 'Batch-2026', role: 'President', imageUrl: Member1 },
  { name: 'Jesus Weiss', location: 'Batch-2025', role: 'Vice President', imageUrl: Member2 },
  { name: 'Annie Rice', location: 'Batch-2027', role: 'Secretary', imageUrl: Member3 },
  { name: 'SRK', location: 'Batch-2026', role: 'Content Head', imageUrl: Member4 },
  { name: 'BigB', location: 'Batch-20265', role: 'Event Coordinator', imageUrl: Member5 },
  { name: 'HitMan', location: 'Batch-2026', role: 'Research Head', imageUrl: Member6 },
  { name: 'Sachin', location: 'Batch-2026', role: 'Tech Head', imageUrl: Member7 },
  { name: 'Modi Ji', location: 'Batch-2026', role: 'Managment Coordinator', imageUrl: Member8 },
  { name: 'Zeeshan', location: 'Batch-0000', role: 'Useless', imageUrl: Member9 },
];

const ExecutiveMembersPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#F0F4F8]">
      {/* Header Section */}
      <div className="relative h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${NITimg3})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-between h-full px-8 text-white">
          <img src={CognizenLogo2} alt="Cognizen Club Logo" className="h-1/" style={{ width: '12%' }} />
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3 text-center font-raleway space-y-4">
            <h1 className="text-4xl font-bold">Let's meet</h1>
            <h1 className="text-4xl font-bold">our</h1>
            <h1 className="text-4xl font-bold">Executive Members</h1>
          </div>
          <div className="absolute top-4 right-4 flex space-x-4">
            <Link to="/" className="text-md font-medium px-4 py-2 hover:underline">Home</Link>
            <Link to="/leadership" className="text-md font-medium px-4 py-2 hover:underline">Leadership</Link>
            <Link to="/team" className="text-md font-medium px-4 py-2 hover:underline">Team</Link>
            <Link to="/alumni" className="text-md font-medium px-4 py-2 hover:underline">Alumni</Link>
            <Link to="/more" className="text-md font-medium px-4 py-2 hover:underline">More</Link>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex justify-center py-[10vh]">
        <div className="p-8 w-4/5">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#222f3d] font-raleway">"Innovate, Collaborate, Succeed"</h2>
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full flex justify-center pt-8">
              <div className="bg-white p-8 rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <img src={members[0].imageUrl} alt={members[0].name} className="h-32 w-32 rounded-full border-2 border-gray-300" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{members[0].name}</h3>
                    <p className="text-gray-600">{members[0].location}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-bold mb-2">{members[0].role}</p>
                <div className="flex flex-wrap gap-2">
                  {['Linkd.', 'Insta', 'X', 'mail', 'contact'].map((tag, idx) => (
                    <a key={idx} href="#" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center gap-8 pt-8">
              {members.slice(1, 3).map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <img src={member.imageUrl} alt={member.name} className="h-32 w-32 rounded-full border-2 border-gray-300" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 font-bold mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Link', 'Insta', 'X', 'mail', 'contact'].map((tag, idx) => (
                      <a key={idx} href="#" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between gap-8 pt-8">
              {members.slice(3, 6).map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <img src={member.imageUrl} alt={member.name} className="h-32 w-32 rounded-full border-2 border-gray-300" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 font-bold mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Linkd.', 'Insta', 'X', 'mail', 'contact'].map((tag, idx) => (
                      <a key={idx} href="#" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
             
            <div className="w-full flex justify-between gap-8 pt-8">
              {members.slice(6,9).map((member, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex items-center mb-4">
                    <img src={member.imageUrl} alt={member.name} className="h-32 w-32 rounded-full border-2 border-gray-300" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 font-bold mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {['Linkd.', 'Insta', 'X', 'mail', 'contact'].map((tag, idx) => (
                      <a key={idx} href="#" className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm">{tag}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default ExecutiveMembersPage;
