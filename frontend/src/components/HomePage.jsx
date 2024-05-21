//Home page
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Phe from '../assets/Phe.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import NoticeBoard from './NoticeBoard';
import '@fortawesome/fontawesome-free/css/all.min.css';

const articles = [
  { type: 'Pheloneist', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Prince Dwivedi', date: '2024-05-16' },
  { type: 'Opinion', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'The Prince', date: '2024-05-15' },
  { type: 'Politics', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Raj Dwivedi', date: '2024-05-14' },
  { type: 'Pheloneist', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Raj', date: '2024-05-16' },
  { type: 'Opinion', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Raj Naam To..', date: '2024-05-15' },
  { type: 'Politics', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Sachin Tendulkar', date: '2024-05-14' },
  { type: 'Pheloneist', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Shahrukh Khan', date: '2024-05-16' },
  { type: 'Opinion', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'SRK', date: '2024-05-15' },
  { type: 'Politics', highlight: "After Polls, Small Opposition Parties Will Merge With Congress, PM Claims", imageUrl: Phe, author: 'Big B', date: '2024-05-14' },
];

const Card = ({ type, highlight, imageUrl, author, date, onReadMore }) => {
  return (
    <div className="bg-[#FFFFFE] rounded-lg overflow-hidden transform transition-transform hover:bg-white hover:shadow-2xl hover:scale-[1.0001]">
      <div className='px-2.5'>
        <div className="bg-[#FFFFFE] py-2" style={{ height: '36px' }}>
          <h1 className="text-left text-xl font-bold font-sans" style={{ color: '#212121' }}>{type}</h1>
        </div>
        
        <div className="h-56 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${imageUrl})`, height: '224.45px' }}>
          {/* Image section */}
        </div>
        
        <div className="py-2" style={{ height: '75px' }}>
          <h2 className="text-mid font-semibold mb-1 font-sans" style={{ color: '#212121' }}>{highlight}</h2>
        </div>
        
        <div className="bg-[#FFFFFE] py-1 flex justify-between items-center" style={{ height: '20.6px' }}>
          <div className="text-sm" style={{ color: '#979797' }}>
            <span>{author}</span> | <span>{date}</span>
          </div>
          <button 
            className="text-sm font-semibold text-blue-400 hover:text-[#c9c6c6]" 
            onClick={() => onReadMore(type)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoticeBoard, setShowNoticeBoard] = useState(false);
  const noticeRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for: ${searchQuery}`);
  };

  const toggleNoticeBoard = () => {
    setShowNoticeBoard(!showNoticeBoard);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        noticeRef.current &&
        !noticeRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowNoticeBoard(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReadMore = (type) => {
    localStorage.setItem('articleType', type);
    navigate('/article');
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#FFFFF5] p-10 pt-2 flex justify-center shadow-sm">
        <div className="w-4/5">
          <div className="flex justify-center pb-7">
            <div className="flex w-full h-8 bg-[#FFFFFE] shadow-md rounded-lg overflow-hidden hover:outline hover:outline-blue-200 transform hover:bg-white hover:shadow-2xl hover:scale-[1.0001] transition-all">
              <input
                type="text"
                className="w-11/12 p-4 text-lg bg-[#FFFFFE] placeholder-center flex items-center justify-center focus:outline-none font-sans"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="w-1/12 bg-blue-400 text-white text-lg hover:bg-blue-600 transition-all font-extrabold font-sans"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ rowGap: '80px' }}>
            {articles.map((article, index) => (
              <Card key={index} {...article} onReadMore={handleReadMore} />
            ))}
          </div>
        </div>
      </div>

      {/* Loudspeaker Icon for NoticeBoard */}
      <div className="fixed bottom-4 right-4 flex flex-col items-center">
        <div
          ref={iconRef}
          className="relative cursor-pointer text-[#222f3d] hover:text-[#5e6b79] hover:text-lg hover:text-extrabold"
          onClick={toggleNoticeBoard}
        >
          <i className="fas fa-bullhorn text-4xl"></i>
          <span className="announcement-popup absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 transition-opacity duration-300">
            Announcements
          </span>
        </div>

        {showNoticeBoard && (
          <div ref={noticeRef} className="absolute bottom-12 right-0 w-[40vw] h-[80vh] bg-[#FFFFF5] border border-gray-300 rounded shadow-lg z-50">
            <NoticeBoard />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
