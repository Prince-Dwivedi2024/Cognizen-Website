import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ type, title, photo, author, publishDate, description, onReadMore, large }) => {
  // Function to limit description to 25 words
  const limitedDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 25) {
      return words.slice(0, 30).join(' ') + '...';
    }
    return description;
  };

  // Function to filter non-empty authors
  const formatAuthors = (authors) => {
    return authors.filter(author => author.trim() !== '').join(' & ');
  };

  return (
    <div
      className={`bg-transparent shadow-xl overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl ${large ? 'large-card' : ''}`}
      style={large ? { width: 'auto', height: 'auto', margin: '0 auto' } : {}}
    >
      <div>
        <div
          className="relative bg-cover bg-center"
          style={{ height: large ? '500px' : 'auto' }}
        >
          <img src={photo} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between" style={{ minHeight: '150px' }}>
          <h2 className="text-lg font-semibold mb-2 font-sans dark:text-[#A0B4C3]">{title}</h2>
          {large && <p className="text-gray-700 dark:text-gray-300 mb-4">{limitedDescription(description)}</p>}
          <div className="bg-transparent py-1 flex justify-between items-center mt-auto">
            <div className="text-sm text-gray-700 dark:text-gray-400">
              <span>{formatAuthors(author)}</span> | <span>{publishDate}</span>
            </div>
            <button
              className="text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-[#c9c6c6] dark:hover:text-[#c9c6c6]"
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
    if (words.length > 25) {
      return words.slice(0, 45).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="flex border-b border-gray-300 dark:border-gray-600 py-4" onClick={() => handleReadMore}>
      <div className="flex-shrink-0 mr-4">
        <img src={photo} alt={title} className="w-24 h-24 object-cover" />
      </div>
      <div className="flex-grow">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer hover:text-orange-400 dark:hover:text-orange-300"
          onClick={() => onReadMore(type)}
        >
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{limitedDescription(description)}</p>
        <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-400">
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
        console.log(articlesData);
        setArticles(articlesData);
        console.log('hi');
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
      <div className="min-h-screen bg-[var(--bg-color)] p-10 pt-2 flex justify-center shadow-sm">
        <div className="w-4/5">
          <div className="pb-12">
            <h2 className="text-3xl font-medium font-serif pt-16 pb-2 text-[#222f3d] dark:text-[#A0B4C3] underline underline-offset-8">History ARTICLES -</h2>
            <div className="p-10 flex justify-center">
              {articles.slice(0, 1).map((article, index) => (
                <Card key={index} {...article} onReadMore={() => handleReadMore(article.type)} large />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {articles.slice(1, 7).map((article, index) => (
                <Card key={index} {...article} onReadMore={() => handleReadMore(article.type)} />
              ))}
            </div>
          </div>
          <div className="pb-12 border-t border-black dark:border-[#4A4A4A] pt-10">
            <h2 className="text-3xl font-medium pb-8 font-serif text-[#222f3d] dark:text-[#A0B4C3] underline underline-offset-8">MORE IN History -</h2>
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
