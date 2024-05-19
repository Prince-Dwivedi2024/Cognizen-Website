// Noticeboard
import React from 'react';
import Phe from '../assets/Phe.jpeg';

const notices = [
  { text: "Notice 1", img: Phe },
  { text: "Notice 2", img: Phe },
  { text: "Notice 3", img: Phe },
];

const NoticeBoard = () => {
  return (
    <div className="p-4 h-[80vh] w-[40vw] bg-[#FFFFF5] rounded shadow-lg overflow-y-auto">
      <h2 className="text-left text-lg font-bold mb-4">Latest Updates</h2>
      {notices.map((notice, index) => (
        <div 
          key={index} 
          className="flex justify-between items-center p-2 bg-[#FFFFF5] hover:bg-[#FFFFFE] transition-colors shadow-none hover:shadow-md transform hover:scale-[1.0001]"
        >
          <span>{notice.text}</span>
          <img src={notice.img} alt="Notice" className="w-10 h-10 rounded-full" />
        </div>
      ))}
    </div>
  );
};

export default NoticeBoard;
