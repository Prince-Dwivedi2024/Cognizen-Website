import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const Article = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [article, setArticle] = useState({});
  const [photoData, setPhotoData] = useState({});

  const fetchArticle = async () => {
    const storedId = localStorage.getItem('articleId');
    const storedType = localStorage.getItem('articleType');

    if (!storedId || !storedType) {
      navigate('/');
      return;
    }

    setLoader(true);
    try {
      console.warn(storedId, storedType);
      const response = await fetch(`https://cognizen-website.onrender.com/article/${storedId}?type=${storedType}`);

      if (!response.ok) {
        setLoader(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const articleData = await response.json();
      setArticle(articleData);
      setLoader(false);
      return articleData; // Return the fetched article data
    } catch (error) {
      console.error('Error fetching article:', error);
      setLoader(false);
      return null;
    }
  };

  const fetchPhoto = async (authorId) => {
    try {
      if (!authorId) return; 

      const response = await fetch(`https://cognizen-website.onrender.com/member/${authorId}`);
      const data = await response.json();
      setPhotoData(data);
      console.warn(data);
    }
    catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    const loadData = async () => {
      const articleData = await fetchArticle();
      if (articleData && articleData.authorId) {
        fetchPhoto(articleData.authorId);
      }
    };

    loadData();
  }, [navigate]);

  const formatAuthors = (authors) => {
    return authors.filter(author => author.trim() !== '').join(' & ');
  };

  return (
    !loader ? (
      <>
        <div className="max-w-4xl mx-auto p-4 mt-4 mb-[10vh] relative">
          <button onClick={() => navigate('/')} className="bg-orange-500 text-white px-4 py-2 rounded absolute top-0 left-0">
            Home
          </button>
          <div className="text-sm text-orange-500 mb-2 mt-12">{article.topic}</div>
          <h1 className="text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <p className="text-md text-gray-600 mb-4">
            {article.description}
          </p>
          <div className="flex items-center mb-6">
            <img src={photoData.photo} alt="Author" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="text-gray-700 font-bold">{formatAuthors(article.author || [])}</p>
              <p className="text-gray-500">{article.publishDate}</p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <img src={article.photo} alt="Main" className="w-[900px] h-[506.25px] object-cover" />
          </div>
          <div className="article-content text-gray-800">
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {article.content}
            </div>
            {/* Add more article content as needed */}
          </div>

        </div>
        <Footer />
      </>
    ) : (
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-48 h-48 border-4 border-blue-500 border-t-transparent border-t-4 border-r-transparent border-r-4 rounded-full animate-spin"></div>
      </div>
    )
  );
};

export default Article;
