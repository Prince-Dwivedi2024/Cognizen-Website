//full page to display selected article
import { useEffect, useState } from "react";

const Article = () => {
  const [articleType, setArticleType] = useState('');

  useEffect(() => {
    const storedType = localStorage.getItem('articleType');
    if (storedType) {
      setArticleType(storedType);
    }
  }, []);

  return (
    <div>
      <h1>Article Type: {articleType}</h1>
      {/* Add more article-related content here */}
    </div>
  );
};

export default Article;
