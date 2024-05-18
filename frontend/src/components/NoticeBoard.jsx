//page for events and achievements
// src/components/NoticeBoard.js
import React from 'react';

const notices = [
  { id: 1, text: 'Notice 1', image: 'path/to/image1.jpg' },
  { id: 2, text: 'Notice 2', image: 'path/to/image2.jpg' },
  { id: 3, text: 'Notice 3', image: 'path/to/image3.jpg' },
];

export default function NoticeBoard() {
  return (
    <div className="bg-white border border-gray-300 rounded shadow-lg p-4">
      {notices.map((notice) => (
        <div key={notice.id} className="flex items-center mb-4">
          <div className="flex-grow">{notice.text}</div>
          <img src={notice.image} alt={notice.text} className="h-16 w-16 object-cover ml-4" />
        </div>
      ))}
    </div>
  );
}
