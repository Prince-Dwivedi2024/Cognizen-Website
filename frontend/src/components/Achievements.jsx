import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Phe from '../assets/Phe.jpeg';
import Nav from './Nav';
import Footer from './Footer';
import NoticeBoard from './NoticeBoard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Trophie from '../assets/Trophie.png';

const achievements = [
  {
    eventName: 'National Political Debate Competition, JNU',
    points: [
      'Our cognizen club team won the first prize',
      'Awarded by the President of India',
      'Team Members- Zeeshan, Jian, Baba',
      'Cash Prize of 50k'
    ],
    imageUrl: Phe
  },
  {
    eventName: 'Event Two',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4'
    ],
    imageUrl: Phe
  },
  {
    eventName: 'Event Three',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4'
    ],
    imageUrl: Phe
  },
  {
    eventName: 'Event Four',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4'
    ],
    imageUrl: Phe
  },
  {
    eventName: 'Event Five',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4'
    ],
    imageUrl: Phe
  },
  {
    eventName: 'Event Six',
    points: [
      'Point 1',
      'Point 2',
      'Point 3',
      'Point 4'
    ],
    imageUrl: Phe
  },
];

const AchievementCard = ({ eventName, points, imageUrl }) => {
  return (
    <div className="bg-[#FFFFFE] rounded-lg overflow-hidden shadow-lg p-4 transition-transform hover:shadow-2xl hover:scale-[1.008]" style={{ height: '30vh' }}>
      <div className="flex h-full">
        <div className="w-1/3 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${imageUrl})` }}>
          {/* Image section */}
        </div>
        <div className="w-2/3 p-4 pl-10 flex flex-col justify-between">
          <h1 className="text-xl font-bold" style={{ color: '#212121' }}>{eventName}</h1>
          <ul className="list-disc list-inside">
            {points.map((point, index) => (
              <li key={index} className="text-sm" style={{ color: '#212121' }}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={Trophie} alt="" className='h-10' />
        </div>
      </div>
    </div>
  );
};

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

const Achievements = () => {
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

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#F0F4F8] p-10 py-[15vh] flex justify-center shadow-sm">
        <div className="w-4/5">
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-14">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </div>
      </div>

      <OurMilestones />

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

export default Achievements;
