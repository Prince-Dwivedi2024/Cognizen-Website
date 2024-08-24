import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ type, title, photo, author, publishDate, description, onReadMore, large }) => {
  const limitedDescription = (description) => {
    const words = description.split(' ');
    const isSmallScreen = window.innerWidth <= 360;
    const wordLimit = isSmallScreen ? 10 : 25;
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const formatAuthors = (authors) => {
    return authors.filter(author => author.trim() !== '').join(' & ');
  };

  return (
    <div
      className={`bg-transparent shadow-xl overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl ${large ? 'large-card' : 'card'}`}
      style={large ? { width: 'auto', height: 'auto', margin: '0 auto' } : { width: '95%', padding: '1rem' }}
    >
      <div>
        <div
          className="relative bg-cover bg-center"
          style={{ height: large ? '300px' : 'auto' }}
        >
          <img src={photo} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-2 md:p-4 flex flex-col justify-between" style={{ minHeight: '150px' }}>
          <h2 className="text-base md:text-lg font-semibold mb-1 md:mb-2 font-sans dark:text-[#A0B4C3]">{title}</h2>
          {large && (
            <p className="mb-4 text-sm md:text-base dark:text-gray-300">{limitedDescription(description)}</p>
          )}
          <div className="bg-transparent py-1 flex justify-between items-center mt-auto">
            <div className="text-xs md:text-sm dark:text-gray-400">
              <span>{formatAuthors(author)}</span> | <span>{publishDate}</span>
            </div>
            <button
              className="text-xs md:text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-button-hover-color dark:hover:text-[#c9c6c6]"
              onClick={() => onReadMore(type)}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreInHistoryCard = ({ type, description, title, photo, author, publishDate, onReadMore }) => {
  const limitedDescription = (description) => {
    const words = description.split(' ');
    const isSmallScreen = window.innerWidth <= 360;
    const wordLimit = isSmallScreen ? 10 : 45;
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="flex border-b border-gray-300 dark:border-gray-600 py-1 md:py-2 card" onClick={() => handleReadMore}>
      <div className="flex-shrink-0 pr-2 pl-1 md:pr-4 md:pl-2">
        <img src={photo} alt={title} className="h-16 w-16 md:w-28 md:h-28 object-cover" />
      </div>
      <div className="flex-grow">
        <h3
          className="text-sm md:text-xl font-semibold mb-1 md:mb-2 cursor-pointer hover:text-orange-400 dark:hover:text-orange-300"
          onClick={() => onReadMore(type)}
        >
          {title}
        </h3>
        {/* Hide description on small screens */}
        <p className="mb:1 md:mb-2 hidden md:block dark:text-gray-300">{limitedDescription(description)}</p>
        <div className="flex justify-between items-center text-sm dark:text-gray-400">
          <div>
            <span>{author}</span> | <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistoryArticles = async () => {
      try {
        const response = await fetch('https://cognizen-website.onrender.com/gethistory?type=Article');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const articlesData = await response.json();
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching History articles:', error);
      }
    };

    fetchHistoryArticles();
  }, []);

  const handleReadMore = (type) => {
    localStorage.setItem('articleType', type);
    navigate('/article');
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[var(--bg-color)] p-4 md:p-10 pt-2 flex justify-center shadow-sm">
        <div className="w-full md:w-4/5">
          <div className="pb-8 md:pb-12">
            <h2 className="text-xl md:text-3xl font-medium font-serif pt-10 md:pt-16 pb-2 underline underline-offset-8 dark:text-[#A0B4C3]">History ARTICLES -</h2>
            <div className="p-4 md:p-10 flex justify-center">
              {articles.slice(0, 1).map((article, index) => (
                <Card key={index} {...article} onReadMore={() => handleReadMore(article.type)} large />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-14">
              {articles.slice(1, 7).map((article, index) => (
                <Card key={index} {...article} onReadMore={() => handleReadMore(article.type)} />
              ))}
            </div>
          </div>
          <div className="pb-8 md:pb-12 border-t border-black dark:border-[#4A4A4A] pt-8 md:pt-10">
            <h2 className="text-xl md:text-3xl font-medium pb-4 md:pb-8 font-serif dark:text-[#A0B4C3] underline underline-offset-8">MORE IN History -</h2>
            <div className="grid grid-cols-1 gap-4">
              {articles.slice(4).map((article, index) => (
                <MoreInHistoryCard key={index} {...article} onReadMore={() => handleReadMore(article.type)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
