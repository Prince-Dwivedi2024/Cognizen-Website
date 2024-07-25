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
    <div className="p-4 h-[80vh] w-[40vw] bg-[#FFFFF5] rounded-lg shadow-lg overflow-y-auto">
      <h2 className="bg-[#FFFFFE] text-left text-lg text-gray-700 font-bold mb-4 hover:text-gray900 hover:font-extrabold">Latest Updates</h2>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {error ? (
            <div>Error: {error}</div>
          ) : (
            notices.map((notice, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-[#FFFFFE] hover:bg-white hover:shadow-2xl shadow-none hover:scale-[1.0001] border-b border-[#c9c6c6]"
              >
                <div className="flex flex-col font-raleway">
                  <span className='font-semibold'>{notice.title}</span>
                  <span className="text-sm mt-10" style={{ color: '#979797' }}>{notice.publishDate}</span>
                </div>
                <button 
                  className="text-sm font-semibold text-blue-400 hover:text-[#c9c6c6] transition-all" 
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
