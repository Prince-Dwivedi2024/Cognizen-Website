// import React, { useRef, useEffect } from 'react';
// import Phe from '../assets/Phe.jpeg';

// const notices = [
//   // Your notices data...
// ];

// const NoticeBoard = ({ closeNoticeBoard }) => {
//   const noticeRef = useRef(null); // Reference to the NoticeBoard component

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // Check if the click occurred outside of the NoticeBoard component
//       if (noticeRef.current && !noticeRef.current.contains(event.target)) {
//         closeNoticeBoard(); // Close the Noticeboard dropup
//       }
//     };

//     // Add event listener to the document to handle clicks outside of the NoticeBoard component
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       // Remove event listener when the component is unmounted
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [closeNoticeBoard]);

//   return (
//     <div ref={noticeRef} className="p-4 h-[80vh] w-[40vw] bg-[#FFFFF5] rounded-lg shadow-lg overflow-y-auto">
//       <h2 className="bg-[#FFFFFE] text-left text-lg text-gray-700  font-bold mb-4 hover:text-gray900 hover:font-extrabold">Latest Updates</h2>
//       {notices.map((notice, index) => (
//         <div 
//           key={index} 
//           className="flex justify-between items-center p-2 bg-[#FFFFFE] hover:bg-white hover:shadow-2xl  shadow-none  hover:scale-[1.0001] border-b border-[#c9c6c6]"
//         >
//           <div className="flex flex-col">
//             <span>{notice.text}</span>
//             <span className="text-sm mt-10" style={{ color: '#979797' }}>{notice.date}</span>
//           </div>
//           <button className="text-sm font-semibold text-blue-400 hover:text-[#c9c6c6]  transition-all">more&gt;&gt;</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NoticeBoard;
