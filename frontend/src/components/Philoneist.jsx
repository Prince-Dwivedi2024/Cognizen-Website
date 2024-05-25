//user landing page for articles related to Pheloneist topic

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Card1 from '../assets/Card1.webp';
import Card2 from '../assets/Card2.webp';
import Card3 from '../assets/Card3.webp';
import Card4 from '../assets/Card4.webp';
import Card5 from '../assets/Card5.webp';
import Card6 from '../assets/Card6.webp';


const articles = [
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
];

const moreInPhiloneist = [
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
];

const Card = ({ type, highlight, imageUrl, author, date, detail, passage, onReadMore, large = false }) => (
  <div
    className={`bg-white rounded shadow-md overflow-hidden transform transition-transform hover:scale-105 ${large ? 'large-card' : ''}`}
    style={large ? { width: '800px', height: '500px', margin: '0 auto' } : {}}
  >
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ height: large ? '350px' : '240px' }}
      >
        <img src={imageUrl} alt={highlight} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 font-sans" style={{ color: '#212121' }}>{highlight}</h2>
        {large && <p className="text-gray-700 mb-4">{passage}</p>}
        <div className="bg-transparent py-1 flex justify-between items-center">
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

const MoreInPhiloneistCard = ({ type, highlight, detail, imageUrl, author, date, onReadMore }) => (
  <div className="cursor-pointer flex bg-white border-b border-gray-300 rounded font-raleway" onClick={() => onReadMore(type)}>
    <div className="flex-shrink-0 mr-4">
      <img src={imageUrl} alt={highlight} className="w-24 h-28 object-cover" />
    </div>
    <div className="flex-grow p-3">
      <h3 className="text-lg font-semibold mb-2">{highlight}</h3>
      <p className="text-gray-700 mb-2">{detail}</p>
      <div className="flex justify-between items-center text-sm">
        <div className='text-[#2b5455]'>
          <span>{author}</span> | <span>{date}</span>
        </div>

      </div>
    </div>
  </div>
);

const Philoneist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNoticeBoard, setShowNoticeBoard] = useState(false);
  const noticeRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
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
      <div className="min-h-screen bg-[#F0F4F8] p-10 py-[10vh] flex justify-center shadow-sm">
        <div className="w-4/5">

         
          <div className="pb-12">
            <h2 className="text-3xl font-medium mb-4 font-raleway pt-10 pb-4 text-black">Philoneist Articles-</h2>

            {/* That single big card */}
            <div className="p-10 flex justify-center ">
              {articles.slice(0, 1).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} large />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {articles.slice(1, 7).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>

          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium  pb-4 font-raleway text-black ">More in Philoneist-</h2>
            <div className="grid grid-cols-1 gap-4">
              {moreInPhiloneist.map((article, index) => (
                <MoreInPhiloneistCard key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Philoneist;
