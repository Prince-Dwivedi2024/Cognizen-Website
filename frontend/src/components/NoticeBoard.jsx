import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getNotices = async () => {
      try {
        const response = await fetch('https://cognizen-website.onrender.com/getnotice', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const noticesData = await response.json();
        setNotices(noticesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setError("Something went wrong while fetching notices.");
        setLoading(false);
      }
    };

    getNotices();
  }, []);

  const handleMoreClick = (notice) => {
    localStorage.setItem('selectedNotice', JSON.stringify(notice));
    navigate('/notice-detail');
  };

  return (
    <div className="p-4 h-[50vh] w-[90vw] md:h-[70vh] md:w-[60vw] lg:h-[80vh] lg:w-[40vw] bg-[#FFFFF5] dark:bg-[#1A202C] rounded-lg shadow-lg overflow-auto">
      <h2 className="bg-[#FFFFFE] dark:bg-[#1A202C] text-left text-lg text-gray-700 dark:text-gray-300 font-bold mb-4">
        Latest Updates
      </h2>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-700"></div>
        </div>
      ) : (
        <>
          {error ? (
            <div>Error: {error}</div>
          ) : (
            notices.map((notice, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 mb-2 bg-[#FFFFFE] dark:bg-[#1A202C] hover:bg-white dark:hover:bg-[#2D3748] shadow-sm border-b border-[#c9c6c6] dark:border-[#4A5568] transition-all"
              >
                <div className="flex flex-col font-raleway">
                  <span className="font-semibold text-sm lg:text-base">{notice.title}</span>
                  <span className="text-xs lg:text-sm mt-1" style={{ color: '#979797' }}>{notice.publishDate}</span>
                </div>
                <button 
                  className="text-xs lg:text-sm font-semibold text-blue-400 dark:text-blue-300 hover:text-[#c9c6c6] dark:hover:text-[#CBD2D9] transition-all" 
                  onClick={() => handleMoreClick(notice)}
                >
                  more&gt;&gt;
                </button>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default NoticeBoard;
