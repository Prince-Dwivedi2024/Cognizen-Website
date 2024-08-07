//user landing page for articles related to Archives topic


import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import NoticeBoard from './NoticeBoard';

import Card1 from '../assets/Card1.webp';
import Card2 from '../assets/Card2.webp';
import Card3 from '../assets/Card3.webp';
import Card4 from '../assets/Card4.webp';
import Card5 from '../assets/Card5.webp';
import Card6 from '../assets/Card6.webp';
import Card7 from '../assets/Card7.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

const articles = [
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card7, author: 'Author4', date: '2024-05-16' },
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card5, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card6, author: 'Author4', date: '2024-05-16' },
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card7, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card7, author: 'Author4', date: '2024-05-16' },
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card5, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card6, author: 'Author4', date: '2024-05-16' },
];

const moreInArchives = [
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Archives', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Archives', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
];

const Card = ({ type, highlight, imageUrl, author, date, detail, passage, onReadMore, large = false }) => (
  <div 
    className={`bg-transparent bg-[#F0F4F8]  shadow-sm overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl ${large ? 'large-card' : ''}`}
    style={large ? { width: '800px', height: '500px', margin: '0 auto' } : {}}
  >
    <div>
      <div 
        className="relative bg-cover bg-center" 
        style={{ height: large ? '350px' : '240px' }}
      >
        <img src={imageUrl} alt={highlight} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between" style={{ minHeight: '150px' }}>
        <h2 className="text-lg font-semibold mb-2 font-sans" style={{ color: '#212121' }}>{highlight}</h2>
        {large && <p className="text-gray-700 mb-4">{detail}</p>}
        <div className="bg-transparent py-1 flex justify-between items-center mt-auto">
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
  </div>
);

const MoreInArchivesCard = ({ type, highlight, detail, imageUrl, author, date, onReadMore }) => (
  <div className="flex border-b border-gray-300 py-4">
    <div className="flex-shrink-0 mr-4">
      <img src={imageUrl} alt={highlight} className="w-24 h-24 object-cover" />
    </div>
    <div className="flex-grow">
      <h3
        className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-400"
        onClick={() => onReadMore(type)}
      >
        {highlight}
      </h3>
      <p className="text-gray-700 mb-2">{detail}</p>
      <div className="flex justify-between items-center text-sm">
        <div>
          <span>{author}</span> | <span>{date}</span>
        </div>
      </div>
    </div>
  </div>
);

const Archives = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoticeBoard, setShowNoticeBoard] = useState(false);
  const noticeRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    // console.log(Searching for: ${searchQuery});
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
      <div className="min-h-screen bg-[#F0F4F8] p-10 pt-2 flex justify-center shadow-sm">
        <div className="w-4/5">
          
          <div className="pb-12">
            <h2 className="text-3xl font-medium  font-serif pt-16 pb-2 text-[#222f3d] underline underline-offset-8">ARCHIVES ARTICLES -</h2>
              
              {/* That single big card */}
            <div className="p-10 flex justify-center">
              {articles.slice(0, 1).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} large />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {articles.slice(1,7).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>

          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium  pb-8 font-serif text-[#222f3d] underline underline-offset-8">MORE IN ARCHIVES -</h2>
            <div className="grid grid-cols-1 gap-4">
              {moreInArchives.map((article, index) => (
                <MoreInArchivesCard key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="fixed bottom-4 right-4 flex flex-col items-center">
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
            <div ref={noticeRef} className="fixed bottom-12 right-4 w-96 p-4 bg-white rounded-lg shadow-lg z-50">
              <NoticeBoard />
            </div>
          )}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Archives;
