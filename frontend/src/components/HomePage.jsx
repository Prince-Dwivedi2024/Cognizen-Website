//user landing page for articles and notices
import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div>HomePagehnn</div>
  )
}

export default HomePage;
