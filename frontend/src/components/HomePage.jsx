//user landing page for articles and notices
// src/Home/HomePage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const articles = [
  { title: 'Article 1', content: 'This is a brief summary of article 1.' },
  { title: 'Article 2', content: 'This is a brief summary of article 2.' },
  { title: 'Article 3', content: 'This is a brief summary of article 3.' },
  { title: 'Article 4', content: 'This is a brief summary of article 4.' },
  { title: 'Article 5', content: 'This is a brief summary of article 5.' },
  { title: 'Article 6', content: 'This is a brief summary of article 6.' },
  { title: 'Article 7', content: 'This is a brief summary of article 7.' },
  { title: 'Article 8', content: 'This is a brief summary of article 8.' },
  { title: 'Article 9', content: 'This is a brief summary of article 9.' },
  { title: 'Article 10', content: 'This is a brief summary of article 10.' },
  { title: 'Article 11', content: 'This is a brief summary of article 11.' },
  { title: 'Article 12', content: 'This is a brief summary of article 12.' },
];

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="min-h-screen bg-black p-10 pt-2 ">
      <div className="flex justify-center pb-7 ">
        <div className="flex w-full h-8  bg-white shadow-md rounded-lg overflow-hidden hover:outline hover:outline-orange-500 transition-all">
          <input
            type="text"
            className="w-11/12 p-4 text-lg bg-white placeholder-center flex items-center justify-center focus:outline-none font-sans"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="w-1/12 bg-orange-500 text-white text-lg  hover:bg-blue-500 transition-all font-extrabold font-sans"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} title={article.title} content={article.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
