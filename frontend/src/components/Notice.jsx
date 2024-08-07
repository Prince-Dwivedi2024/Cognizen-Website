import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card6 from '../assets/Card5.webp'; // Replace this with an appropriate image

const Notice = () => {
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotice = localStorage.getItem('selectedNotice');
    if (storedNotice) {
      setNotice(JSON.parse(storedNotice));
    }
  }, []);

  if (!notice) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 relative">
      <button onClick={() => navigate('/')} className="bg-orange-500 dark:bg-orange-600 text-white dark:text-gray-100 px-4 py-2 rounded absolute top-0 left-0">
        Home
      </button>
      <div className="text-sm text-orange-500 dark:text-orange-600 mb-2 mt-12">{notice.category}</div>
      <h1 className="text-4xl font-bold mb-4">
        {notice.title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
        {notice.subtitle}
      </p>
      <div className="flex items-center mb-6">
        <img src={Card6} alt="Author" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="text-gray-700 dark:text-gray-200 font-bold">{notice.author}</p>
          <p className="text-gray-500 dark:text-gray-300">{notice.publishDate}</p>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <img src={Card6} alt="Main" className="w-[900px] h-[500px] object-cover" />
      </div>
      <div className="article-content text-gray-800">
        <p className="mb-4">
          <span className="text-5xl float-left mr-2 leading-none">W</span>
          {notice.content}
        </p>
        {/* Add more notice content as needed */}
      </div>
    </div>
  );
};

export default Notice;
