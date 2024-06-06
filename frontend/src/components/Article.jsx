//full page to display selected article
import { useEffect, useState } from "react";
import Card6 from '../assets/Card6.webp'
import { useNavigate } from "react-router-dom";

const Article = () => {
  const [articleType, setArticleType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedType = localStorage.getItem('articleType');
    if (storedType) {
      setArticleType(storedType);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 relative">
      <button onClick={navigate('/')} className="bg-orange-500 text-white px-4 py-2 rounded absolute top-0 left-0">Home</button>
      <div className="text-sm text-orange-500 mb-2 mt-12">Politics: General Elections</div>
      <h1 className="text-4xl font-bold mb-4">
        Education, aspiration & 3 de-hyphenations: A changing Kashmir votes and vents
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        In Kashmir Valley, 3 de-hyphenations stand out. Youth have de-hyphenated from radicalism; de-hyphenation with Pakistan; and security agencies’ success in de-hyphenating weapons and people.
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
    </div>
  );
};

export default Article;