//user landing page for articles and notices

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Phe from '../assets/Phe.jpeg';

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

const Card = ({ type, highlight, imageUrl, author, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-200 px-4 py-2" style={{ height: '36px' }}>
        <h1 className="text-left text-xl font-bold font-sans" style={{ color: '#212121' }}>{type}</h1>
      </div>
      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})`, height: '224.45px' }}>
        {/* Image section */}
      </div>
      <div className="px-4 py-2" style={{ height: '75px' }}>
        <h2 className="text-mid font-semibold mb-1 font-sans" style={{ color: '#212121' }}>{highlight}</h2>
      </div>
      <div className="bg-gray-200 px-4 py-1 flex justify-between items-center" style={{ height: '20.6px' }}>
        <div className="text-sm" style={{ color: '#212121' }}>
          <span>{author}</span> | <span>{date}</span>
        </div>
        <button className="text-sm font-semibold text-blue-500 hover:text-orange-500">Read more</button>
      </div>
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
    <div className="min-h-screen bg-black p-10 pt-2">
      <div className="flex justify-center pb-7">
        <div className="flex w-full h-8 bg-white shadow-md rounded-lg overflow-hidden hover:outline hover:outline-orange-500 transition-all">
          <input
            type="text"
            className="w-11/12 p-4 text-lg bg-white placeholder-center flex items-center justify-center focus:outline-none font-sans"
            placeholder="Search for articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="w-1/12 bg-orange-500 text-white text-lg hover:bg-blue-500 transition-all font-extrabold font-sans"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
