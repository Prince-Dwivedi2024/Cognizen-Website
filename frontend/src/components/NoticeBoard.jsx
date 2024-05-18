//page for events and achievements
import React from 'react';

const NoticeBoard = ({ notices }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 w-80">
      {notices.map((notice, index) => (
        <div key={index} className="flex justify-between items-center border-b py-2">
          <div className="text-sm font-medium">{notice.text}</div>
          {notice.image && <img src={notice.image} alt="Notice" className="w-12 h-12 object-cover ml-4" />}
        </div>
      ))}
    </div>
  );
};

export default NoticeBoard;
