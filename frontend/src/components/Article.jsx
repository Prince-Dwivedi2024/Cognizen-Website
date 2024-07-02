import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card6 from '../assets/Card6.webp';

const Article = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const storedId = localStorage.getItem('articleId');
      const storedType = localStorage.getItem('articleType');

      if (!storedId || !storedType) {
        // Redirect or handle the case when articleId or articleType is missing
        navigate('/');
        return;
      }

      setLoader(true);
      try {
        const response = await fetch(`https://cognizen-website.onrender.com/article/${storedId}type=${storedType}`);

        if (!response.ok) {
          setLoader(false);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const articleData = await response.json();
        setArticle(articleData);
        setLoader(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoader(false);
      }
    };

    fetchArticle();
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 relative">
      {!loader ? (
        <>
          <button onClick={() => navigate('/')} className="bg-orange-500 text-white px-4 py-2 rounded absolute top-0 left-0">
            Home
          </button>
          <div className="text-sm text-orange-500 mb-2 mt-12">Politics: General Elections</div>
          <h1 className="text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {article.description}
          </p>
          <div className="flex items-center mb-6">
            <img src={Card6} alt="Author" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="text-gray-700 font-bold">SHEKHAR GUPTA</p>
              <p className="text-gray-500">25 May, 2024 12:11 pm IST</p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <img src={Card6} alt="Main" className="w-[900px] h-[500px] object-cover" />
          </div>
          <div className="article-content text-gray-800">
            <p className="mb-4">
              <span className="text-5xl float-left mr-2 leading-none">W</span>
              ritingsOnTheWall is a metaphor that emerged through about three decades of travel, mostly in poll-bound India. This instalment comes to you from the Kashmir Valley. It is also my first experience of watching an election in so sensitive, vital, and fascinating a region.
            </p>
            <p className="mb-4">
              First, what is WritingsOnTheWall? It means literally looking at the walls to see what’s changing and what isn’t, what the people want and what they absolutely don’t want.
            </p>
            <p className="mb-4">
              The walls also tell us what the people are buying (branded underwear, Nitish’s Bihar, 2010), or if they are too broke to be buying anything at all (Lalu’s Bihar, 2005). That gives a quick peek into the state of an economy and change. In Kashmir, for the better. You can read all the earlier...
            </p>
            {/* Add more article content as needed */}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[90vh]">
          <div className="w-48 h-48 border-4 border-blue-500 border-t-transparent border-t-4 border-r-transparent border-r-4 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default Article;
