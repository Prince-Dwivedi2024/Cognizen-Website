//Home page
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Nav from './Nav';
import Footer from './Footer';
import NoticeBoard from './NoticeBoard';

import Card1 from '../assets/Card1.webp';
import Card2 from '../assets/Card2.webp';
import Card3 from '../assets/Card3.webp';
import Card4 from '../assets/Card4.webp';
import Card5 from '../assets/Card5.webp';
// import Card6 from '../assets/Card6.webp';
import Card7 from '../assets/Card7.webp';
import Card8 from '../assets/Card8.webp';
import Card9 from '../assets/Card9.jpg';
import TrendCard1 from '../assets/TrendCard1.jpg';
import TrendCard2 from '../assets/TrendCard2.jpg';
import TrendCard3 from '../assets/TrendCard3.jpg';
import TrendCard4 from '../assets/TrendCard4.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';

const MilestoneCard = ({ icon, number, label, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = 50;
      let step = (end - start) / (totalDuration / incrementTime);

      let timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.ceil(start));
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <div className="flex flex-col items-center font-raleway bg-transparent p-4">
      <div className="text-6xl">{icon}</div>
      <div className="text-4xl font-bold mt-2">{count}</div>
      <div className="text-lg mt-1">{label}</div>
    </div>
  );
};

const OurMilestones = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    { icon: <i className="fas fa-users"></i>, number: 1256, label: "Our Alumni" },
    { icon: <i className="fas fa-users"></i>, number: 900, label: "Current Members" },
    { icon: <i className="fas fa-trophy"></i>, number: 50, label: "Total Recognition" },
    { icon: <i className="fas fa-book"></i>, number: 200, label: "Total Articles" }
  ];

  return (
    <div ref={ref} className="w-full bg-blue-500 py-10">
      <div className="flex justify-around items-center h-1/2">
        {milestones.map((milestone, index) => (
          <MilestoneCard key={index} {...milestone} inView={inView} />
        ))}
      </div>
    </div>
  );
};


const articles = [
  { type: 'Pheloneist', highlight: "AI is a black box maybe not for long", detail: "No One Truly Knows How AI Systems Work. A New Discovery Could Change That", imageUrl: Card1, author: 'Author1', date: '2024-05-16' },
  { type: 'World', highlight: "Why Some Iranians Refuse to Mourn Ebrahim Raisi", details: "", imageUrl: Card2, author: 'Author2', date: '2024-05-15' },
  { type: 'Politics', highlight: "As Indians Vote, Modi's Party Misleads Online", imageUrl: Card3, author: 'Author3', date: '2024-05-14' },
  { type: 'Pheloneist', highlight: "Do You Need More Sunscreen When It's Hot?", imageUrl: Card4, author: 'Author4', date: '2024-05-16' },
  { type: 'Reviews', highlight: "The 20 Best Period Dramas to Watch ", imageUrl: Card5, author: 'Author5', date: '2024-05-15' },
  { type: 'World', highlight: "Women Say They Were Pressured Into Long-Term Birth Control", imageUrl: Card5, author: 'Author6', date: '2024-05-14' },
  { type: 'Opinion', highlight: "Best High-Yield Savings Accounts for May 2024", imageUrl: Card7, author: 'Author6', date: '2024-05-14' },
  { type: 'Politics', highlight: "India is holding a mammoth election with nearlya billion voters", imageUrl: Card8, author: 'Author6', date: '2024-05-14' },
];

//Cards for Trending Articles-
const extraArticles = [
  { type: 'History', highlight: "Here are top secrets behind the Pyramids of Giza ", detail: "Curiously, the Great Pyramid of Khufu contains a large granite sarcophagus.", imageUrl: TrendCard1, author: 'Author7', date: '2024-05-13' },
  { type: 'History', highlight: "History behind our two wheels of daily life ", detail: "The Draisine is regarded as the first bicycle and Karl von Drais is seen as the father of the bicycle.", imageUrl: TrendCard2, author: 'The Prince', date: '2024-05-12' },
  { type: 'History', highlight: "Shahjahan and his Tajmahal", detail: "The so-called “22 rooms” in the basement of the Taj Mahal are not really rooms, rather a long arched corridor.... ", imageUrl: TrendCard3, author: 'Raj', date: '2024-05-11' },
  { type: 'History', highlight: "A king, his fear and how he made the Great Wall", detail: "In c. 220 B.C., under Qin Shi Huang, sections of earlier fortifications were joined together to form a united defence system against invasions from the north.", imageUrl: TrendCard4, author: 'Zeeshan', date: '2024-05-10' },

];

//Cards for You Must Know section-
const youMustKnowArticles = [
  { type: 'History', highlight: "Here are top secrets behind the Pyramids of Giza ", detail: "Curiously, the Great Pyramid of Khufu contains a large granite sarcophagus.", imageUrl: TrendCard1, author: 'Author7', date: '2024-05-13' },
  { type: 'History', highlight: "History behind our two wheels of daily life ", detail: "The Draisine is regarded as the first bicycle and Karl von Drais is seen as the father of the bicycle.", imageUrl: TrendCard2, author: 'The Prince', date: '2024-05-12' },
  { type: 'History', highlight: "Shahjahan and his Tajmahal", detail: "The so-called “22 rooms” in the basement of the Taj Mahal are not really rooms, rather a long arched corridor.... ", imageUrl: TrendCard3, author: 'Raj', date: '2024-05-11' },
  { type: 'History', highlight: "A king, his fear and how he made the Great Wall", detail: "In c. 220 B.C., under Qin Shi Huang, sections of earlier fortifications were joined together to form a united defence system against invasions from the north.", imageUrl: TrendCard4, author: 'Zeeshan', date: '2024-05-10' },
  { type: 'World', highlight: "The Wonders of Space Exploration", detail: "Discover the latest in space technology and exploration.", imageUrl: Card9, author: 'Dr. X', date: '2024-05-20' }
];

const CarouselCard = ({ article, onReadMore }) => (
  <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${article.imageUrl})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-between p-4 font-raleway">
      <div>
        <h2 className="text-2xl font-semibold mb-2">{article.highlight}</h2>
        <p>{article.detail}</p>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div>
          <span>{article.author}</span> | <span>{article.date}</span>
        </div>
        <button
          className="font-semibold  hover:text-blue-500"
          onClick={() => onReadMore(article.type)}
        >
          Read more
        </button>
      </div>
    </div>
  </div>
);

const Carousel = ({ articles, onReadMore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  return (
    <div className="relative">
      <CarouselCard article={articles[currentIndex]} onReadMore={onReadMore} />
      <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
        &#10094;
      </button>
      <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
        &#10095;
      </button>
    </div>
  );
};

const Card = ({ type, highlight, imageUrl, author, date, onReadMore }) => (
  <div className="bg-transparent bg-[#F0F4F8]  shadow-sm overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl">

    <div className="relative bg-cover bg-center h-60" style={{ backgroundImage: `url(${imageUrl})` }}>
    </div>

    <div className='p-5'>
      <div className="py-2" style={{ height: '75px' }}>
        <h2 className="text-mid font-semibold mb-1 font-sans" style={{ color: '#212121' }}>{highlight}</h2>
      </div>
      <div className="bg-transparent py-1 flex justify-between items-center" style={{ height: '20.6px' }}>
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

const YouMustKnowCard = ({ type, highlight, imageUrl, author, date, onReadMore }) => (
  <div className="relative bg-cover bg-center h-80" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-between p-4 font-raleway">
      <div>
        <h2 className="text-xl font-semibold mb-2">{highlight}</h2>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div>
          <span>{author}</span> | <span>{date}</span>
        </div>
        <button
          className="font-semibold  hover:text-blue-500"
          onClick={() => onReadMore(type)}
        >
          Read more
        </button>
      </div>
    </div>
  </div>
);

const HomePage = () => {
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

  const recentArticles = articles.slice(0, 3); // Just an example
  const mostReadArticles = extraArticles.slice(0, 3); // Just an example

  return (
    <div className=''>
      <Nav />
      <div className="min-h-screen bg-[#F0F4F8] p-10 flex justify-center py-[10vh] shadow-sm">
        <div className="w-4/5">

          {/* search bar */}
          {/* <div className="flex justify-center pt-7  ">
            <div className=" flex w-full h-10 bg-[#FFFFFE] shadow-md rounded overflow-hidden hover:outline hover:outline-blue-200 transform hover:bg-white hover:shadow-2xl hover:scale-[1.0001] transition-all">
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
          </div> */}

          <div className="pb-12">
            <h2 className="text-3xl font-medium mb-4 font-serif pt-2 pb-8 text-[#222f3d] underline underline-offset-8">TRENDING ARTICLES -</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              <div className="lg:col-span-3">
                <Carousel articles={[articles[0], ...extraArticles]} onReadMore={handleReadMore} />
              </div>
              {articles.slice(1, 4).map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>

          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium pb-4 font-serif text-[#222f3d] underline underline-offset-8">YOU MUST KNOW -</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {youMustKnowArticles.slice(0, 5).map((article, index) => (
                <YouMustKnowCard key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium pb-8 font-serif text-[#222f3d] underline underline-offset-8">RECENTS -</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {recentArticles.map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
          <div className="pb-12 border-t border-black pt-10">
            <h2 className="text-3xl font-medium pb-8 font-serif text-[#222f3d] underline underline-offset-8">MOST READ -</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
              {mostReadArticles.map((article, index) => (
                <Card key={index} {...article} onReadMore={handleReadMore} />
              ))}
            </div>
          </div>
        </div>

        {/* //Announcements icon section */}
        <div className="fixed bottom-4 right-4 flex flex-col items-center">
          <div
            ref={iconRef}
            className="relative cursor-pointer text-[#222f3d] hover:text-[#5e6b79] hover:text-lg hover:text-extrabold"
            onClick={toggleNoticeBoard}
          >
            <i className="fas fa-bullhorn text-4xl text-[#463f3f]"></i>
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
      </div>
      <OurMilestones />

      <Footer />
    </div>
  );
};

export default HomePage;
