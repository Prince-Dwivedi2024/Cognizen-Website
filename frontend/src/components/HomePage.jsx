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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

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
    <div className="flex flex-col items-center font-raleway bg-transparent p-2 sm:p-4">
      <div className="text-4xl sm:text-5xl md:text-6xl">{icon}</div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">{count}</div>
      <div className="text-sm sm:text-lg mt-1">{label}</div>
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
    <div ref={ref} className="w-full bg-blue-500 dark:bg-[#2563EB] py-8 sm:py-10">
      <div className="flex flex-col sm:flex-row justify-around items-center">
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

const CarouselCard = ({ article, onReadMore }) => {
  const truncateDescription = (description, maxWords) => {
    if (!description) return '';
    const words = description.split(' ');
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : description;
  };

  return (
    <div className="relative bg-cover bg-center h-60 sm:h-72 md:h-80 lg:h-96" style={{ backgroundImage: `url(${article.photo1})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white dark:text-[#F0F4F8] flex flex-col justify-between p-4 font-raleway">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{article.title}</h2>
          <p className="text-sm sm:text-base md:text-lg">{truncateDescription(article.description, 15)}</p>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm md:text-base">
          <div>
            <span>{article.author}</span> | <span>{article.publishDate}</span>
          </div>
          <button
            className="font-semibold hover:text-blue-500 dark:text-[#66C2FF]"
            onClick={() => onReadMore(article.id)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({ id, type, title, photo2, author, publishDate, onReadMore }) => (
  <div className="bg-transparent bg-[#F0F4F8] dark:bg-[#1F2933] shadow-sm overflow-hidden transform transition-transform hover:scale-[1.008] hover:shadow-2xl">
    <div className="relative bg-cover bg-center h-40 sm:h-48 md:h-56 lg:h-60" style={{ backgroundImage: `url(${photo2})` }}></div>
    <div className="p-4 sm:p-5">
      <div className="py-2" style={{ minHeight: '50px' }}>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1 font-sans text-[#212121] dark:text-[#CBD2D9]">
          {title}
        </h2>
      </div>
      <div className="bg-transparent py-1 flex justify-between items-center" style={{ minHeight: '20px' }}>
        <div className="text-xs sm:text-sm md:text-base" style={{ color: '#979797' }}>
          <span>{author}</span> | <span>{publishDate}</span>
        </div>
        <button
          className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-[#c9c6c6] dark:text-[#5AA9E6] dark:hover:text-[#8DC6FF]"
          onClick={() => onReadMore(id)}
        >
          Read...
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

      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white dark:bg-[#2D3748] dark:bg-opacity-60 dark:text-[#E2E8F0] p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white dark:bg-[#2D3748] dark:bg-opacity-60 dark:text-[#E2E8F0] p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

const YouMustKnowCard = ({ id, title, photo2, author, publishDate, onReadMore }) => (
  <div className="relative bg-cover bg-center h-64 sm:h-72 md:h-80" style={{ backgroundImage: `url(${photo2})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 text-white dark:bg-[#1A202C] dark:bg-opacity-60 dark:text-[#E2E8F0] flex flex-col justify-between p-4 font-raleway">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h2>
      </div>
      <div className="flex justify-between items-center text-xs sm:text-sm md:text-base">
        <div>
          <span>{author}</span> | <span>{publishDate}</span>
        </div>
        <button
          className="font-semibold hover:text-blue-500 dark:text-[#5AA9E6] dark:hover:text-[#8DC6FF]"
          onClick={() => onReadMore(id)}
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
  const [trendingArticle, setTrendingArticle] = useState([{}]);
  const [youMustKnowArticle, setYouMustKnowArticle] = useState([{}]);
  const [carouselArticle, setCarouselArticle] = useState([{}]);
  const [mostReadArticle, setMostReadArticle] = useState([{}]);
  const [recentArticle, setRecentArticle] = useState([{}]);
  const [loader, setLoader] = useState(false);


  const noticeRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

  const fetchAllArticles = async () => {
    try {
      setLoader(true);
      const response = await fetch('https://cognizen-website.onrender.com/getarticle?type=Article');
      const data = await response.json();
  
      setTrendingArticle(data.filter(article => article.specialCategorisation.includes('trending')));
      setYouMustKnowArticle(data.filter(article => article.specialCategorisation.includes('youMustKnow')));
      setCarouselArticle(data.filter(article => article.specialCategorisation.includes('carousel')));
      setMostReadArticle(data.filter(article => article.specialCategorisation.includes('mostRead')));
      setRecentArticle(data.reverse());  // Reverse the array to show recent articles first
  
      setLoader(false);
    } catch (e) {
      setLoader(false);
      console.error(e);
    }
  };
  

  useEffect(() => {
    fetchAllArticles();
  }, []);

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

  const handleReadMore = (id) => {
    localStorage.removeItem('articleId');
    localStorage.removeItem('articleType');
    localStorage.setItem('articleId', id);
    localStorage.setItem('articleType', 'Article');
    navigate('/article');
  };

  const recentArticles = articles.slice(0, 3); // Just an example
  const mostReadArticles = extraArticles.slice(0, 3); // Just an example

  return (
    loader ? (
      <div>
        <div className="flex justify-center items-center h-[90vh]">
          <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 border-4 border-blue-500 dark:border-[#5AA9E6] border-t-transparent border-t-4 border-r-transparent border-r-4 rounded-full animate-spin"></div>
        </div>
      </div>
    ) : (
      <div className="">
        <Nav />
        <div className="min-h-screen p-4 sm:p-6 md:p-10 flex flex-col items-center py-[10vh] shadow-sm">
          <div className="w-full sm:w-11/12 md:w-4/5">
            <div className="pb-8 sm:pb-10 md:pb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 font-serif pt-2 pb-4 sm:pb-6 md:pb-8 text-[#222f3d] dark:text-[#CBD2D9] underline underline-offset-8">
                TRENDING ARTICLES -
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-14">
                <div className="lg:col-span-3">
                  <Carousel articles={[trendingArticle[0], ...trendingArticle]} onReadMore={handleReadMore} />
                </div>
                {trendingArticle.slice(1, 4).map((article, index) => (
                  <Card key={index} {...article} onReadMore={handleReadMore} />
                ))}
              </div>
            </div>
  
            <div className="pb-8 sm:pb-10 md:pb-12 border-t border-black dark:border-[#4A5568] pt-8 sm:pt-10 md:pt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium pb-4 sm:pb-6 md:pb-8 font-serif text-[#222f3d] dark:text-[#CBD2D9] underline underline-offset-8">
                YOU MUST KNOW -
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                {youMustKnowArticle.slice(0, 5).map((article, index) => (
                  <YouMustKnowCard key={index} {...article} onReadMore={handleReadMore} />
                ))}
              </div>
            </div>
  
            <div className="pb-8 sm:pb-10 md:pb-12 border-t border-black dark:border-[#4A5568] pt-8 sm:pt-10 md:pt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium pb-4 sm:pb-6 md:pb-8 font-serif text-[#222f3d] dark:text-[#CBD2D9] underline underline-offset-8">
                RECENTS -
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-14">
                {recentArticle.map((article, index) => (
                  <Card key={index} {...article} onReadMore={handleReadMore} />
                ))}
              </div>
            </div>
  
            <div className="pb-8 sm:pb-10 md:pb-12 border-t border-black dark:border-[#4A5568] pt-8 sm:pt-10 md:pt-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium pb-4 sm:pb-6 md:pb-8 font-serif text-[#222f3d] dark:text-[#CBD2D9] underline underline-offset-8">
                MOST READ -
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-14">
                {mostReadArticle.map((article, index) => (
                  <Card key={index} {...article} onReadMore={handleReadMore} />
                ))}
              </div>
            </div>
          </div>
  
          <div className="fixed bottom-4 right-4 flex flex-col items-center">
            <div
              ref={iconRef}
              className="relative cursor-pointer text-[#222f3d] hover:text-[#5e6b79] dark:text-[#CBD2D9] dark:hover:text-[#A0AEC0]"
              onClick={toggleNoticeBoard}
            >
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out dark:text-[#A0AEC0] dark:hover:text-[#E2E8F0]"
                size="lg"
              />
              <span className="announcement-popup absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs sm:text-sm bg-black text-white rounded opacity-0 transition-opacity duration-300 dark:bg-[#2D3748] dark:text-[#E2E8F0]">
                Announcements
              </span>
            </div>
            {showNoticeBoard && (
              <div ref={noticeRef} className="absolute bottom-12 right-0 w-[90vw] h-[50vh] md:w-[40vw] md:h-[80vh] bg-[#FFFFF5] dark:bg-[#2D3748] border border-gray-300 dark:border-[#4A5568] rounded shadow-lg z-50 overflow-auto">
                <NoticeBoard />
              </div>
            )}
          </div>
        </div>
        <OurMilestones />
        <Footer />
      </div>
    )
  );
  

};

export default HomePage;
