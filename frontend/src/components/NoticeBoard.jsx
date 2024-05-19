// Noticeboard
import React, { useRef, useEffect } from 'react';
import Phe from '../assets/Phe.jpeg';

const notices = [
  { text: "Notice 1", date: "2024-05-16", img: Phe },
  { text: "Notice 2", date: "2024-05-15", img: Phe },
  { text: "Notice 3", date: "2024-05-14", img: Phe },
  { text: "Notice 4", date: "2024-05-13", img: Phe },
  { text: "Notice 5", date: "2024-05-12", img: Phe },
  { text: "Notice 6", date: "2024-05-11", img: Phe },
  { text: "Notice 7", date: "2024-05-10", img: Phe },
  { text: "Notice 8", date: "2024-05-09", img: Phe },
  { text: "Notice 9", date: "2024-05-08", img: Phe },
];

const NoticeBoard = () => {
  return (
    <div className="p-4 h-[80vh] w-[40vw] bg-[#FFFFF5] rounded-lg shadow-lg overflow-y-auto">
      <h2 className="bg-[#FFFFFE] text-left text-lg text-gray-700  font-bold mb-4 hover:text-gray900 hover:font-extrabold">Latest Updates</h2>
      {notices.map((notice, index) => (
        <div 
          key={index} 
          className="flex justify-between items-center rounded-lg p-2 bg-[#FFFFFE] hover:bg-white hover:shadow-2xl  shadow-none  hover:scale-[1.0001] border-b border-[#c9c6c6]"
        >
          <div className="flex flex-col">
            <span>{notice.text}</span>
            <span className="text-sm mt-10" style={{ color: '#979797' }}>{notice.date}</span>
          </div>
          <button className="text-sm font-semibold text-blue-400 hover:text-[#c9c6c6]  transition-all">more&gt;&gt;</button>
        </div>
      ))}
    </div>
  );
};

export default NoticeBoard;
