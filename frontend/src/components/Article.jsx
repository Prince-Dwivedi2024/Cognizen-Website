import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import CognizenLogo2 from '../assets/CognizenLogo2.png';

const Article = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [article, setArticle] = useState({});
  const [photoData, setPhotoData] = useState({});
  const [showFullArticle, setShowFullArticle] = useState(false);

  const fetchArticle = async () => {
    const storedId = localStorage.getItem('articleId');
    const storedType = localStorage.getItem('articleType');

    if (!storedId || !storedType) {
      navigate('/');
      return;
    }

    setLoader(true);
    try {
      const response = await fetch(`https://cognizen-website.onrender.com/article/${storedId}?type=${storedType}`);

      if (!response.ok) {
        setLoader(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const articleData = await response.json();
      setArticle(articleData);
      setLoader(false);
      return articleData;
    } catch (error) {
      console.error('Error fetching article:', error);
      setLoader(false);
      return null;
    }
  };

  const fetchPhoto = async (authorId) => {
    try {
      if (!authorId) return;

      const response = await fetch(`https://cognizen-website.onrender.com/member/${authorId[0]}`);
      console.warn(authorId);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPhotoData(data);
      console.warn(data);
    } catch (e) {
      console.warn('Error fetching photo:', e);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const articleData = await fetchArticle();
      if (articleData && articleData.authorId) {
        await fetchPhoto(articleData.authorId);
      }
    };

    loadData();
  }, []);

  const formatAuthors = (authors) => {
    return authors.filter(author => author.trim() !== '').join(' & ');
  };

  const toggleShowFullArticle = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    !loader ? (
      <>
        <div className="max-w-4xl mx-auto p-4 mt-4 mb-[10vh] relative">
          <button onClick={() => navigate('/')} className="bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded absolute top-0 left-0">
            Home
          </button>
          <div className="text-sm text-orange-500 dark:text-orange-400 mb-2 mt-12">{article.topic}</div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            {article.title}
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-4 text-center">
            {article.description}
          </p>
          <div className="flex items-center mb-6 justify-center">
            {photoData.photo ? (
              <img src={photoData.photo} alt="Author" className="w-10 h-10 rounded-full mr-4" />
            ) : (
              <img src={CognizenLogo2} alt="Author" className="w-10 h-10 rounded-full mr-4" />
            )}
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-bold">{formatAuthors(article.author || [])}</p>
              <p className="text-gray-500 dark:text-gray-300">{article.publishDate}</p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={article.photo1}
              alt="Main"
              className="w-full max-w-[900px] h-auto object-cover"
            />
          </div>
          <div className="article-content text-gray-800 dark:text-gray-200">
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {showFullArticle ? (
                article.content
              ) : (
                `${article.content?.slice(0, 300)}...`
              )}
            </div>
            {!showFullArticle && (
              <button
                onClick={toggleShowFullArticle}
                className="mt-4 bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded"
              >
                Continue Reading
              </button>
              )}
              <div className="mt-8 sm:pb-10 md:pb-12 border-t border-black dark:border-[#4A5568] sm:pt-10 md:pt-12"></div>

            </div>
          </div>
        <Footer />
      </>
    ) : (
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-48 h-48 border-4 border-blue-500 dark:border-blue-300 border-t-transparent border-t-4 border-r-transparent border-r-4 rounded-full animate-spin"></div>
      </div>
    )
  );
};

export default Article;
