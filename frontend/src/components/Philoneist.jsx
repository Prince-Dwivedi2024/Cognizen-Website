import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Card1 from '../assets/Card1.webp';
import Card2 from '../assets/Card2.webp';
import Card3 from '../assets/Card3.webp';
import Card4 from '../assets/Card4.webp';
import Card5 from '../assets/Card5.webp';
import Card6 from '../assets/Card6.webp';
import Card7 from '../assets/Card7.webp';

const articles = [
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card7, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card5, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card6, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card7, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card7, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", passage: "This is a passage for the first article to give more detail.", imageUrl: Card5, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card6, author: 'Author4', date: '2024-05-16' },
];

const moreInPhiloneist = [
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'Philoneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
];

const MoreInPhiloneistCard = ({ type, highlight, detail, imageUrl, author, date, onReadMore }) => (
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

const Philoneist = () => {
  const navigate = useNavigate();

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
            <h2 className="text-3xl font-medium  font-serif pt-16 pb-2 text-[#222f3d] underline underline-offset-8">PHILONEIST ARTICLES -</h2>

            {/* That single big card */}
            <div className="p-10 flex justify-center">
              {articles.slice(0, 1).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} large />
              ))}
            </div>

            {/* quadrilateral cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {articles.slice(1, 7).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>

          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium  pb-8 font-serif text-[#222f3d] underline underline-offset-8">MORE IN PHILONEIST -</h2>
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
