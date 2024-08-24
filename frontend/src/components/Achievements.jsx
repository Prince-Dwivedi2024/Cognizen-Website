import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Nav from './Nav';
import Footer from './Footer';
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

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loader, setLoader] = useState(true);
  const noticeRef = useRef(null);
  const iconRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAchievements = async () => {
      try {
        const response = await fetch('https://cognizen-website.onrender.com/getachievement', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const noticesData = await response.json();
        setAchievements(noticesData);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setLoader(false);
      }
    };

    getAchievements();
  }, []);

  const reversedAchievements = [...achievements].reverse();

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#F0F4F8] dark:bg-[#1E1E1E] p-6 sm:p-10 py-[10vh] flex justify-center shadow-sm">
        <div className="w-full sm:w-4/5">
          <div className="grid grid-cols-1 gap-8 sm:gap-14">
            {reversedAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-[#FFFFFE] dark:bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg p-4 transition-transform hover:shadow-2xl hover:scale-[1.008]"
                style={{ height: 'auto' }}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div
                    className="w-full sm:w-1/3 h-48 sm:h-auto bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${achievement.photo})` }}
                  />
                  <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                    <h1 className="text-lg sm:text-xl font-bold text-[#212121] dark:text-[#F5F5F5]">
                      {achievement.title}
                    </h1>
                    <div className="text-sm sm:text-base text-[#212121] dark:text-[#F5F5F5]">
                      {achievement.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <OurMilestones />

      <Footer />
    </>
  );
};

export default Achievements;
