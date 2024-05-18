//user landing page for articles and notices
import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import Nav from "./Nav";
import Footer from "./Footer";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div>
      <Nav/>
      <Footer/>
    </div>
  )
}

export default HomePage;
