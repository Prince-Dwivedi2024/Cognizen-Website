
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import Article from './components/Article';
import Team from './components/Team';
import Leadership from './components/Leadership';
import Alumni from './components/Alumni';
import NoticeBoard from './components/NoticeBoard';
import AdminAchievement from './adminComponents/AdminAchievement';
import AdminAlumni from './adminComponents/AdminAlumni';
import AdminLeadership from './adminComponents/AdminLeadership';
import AdminNotice from './adminComponents/AdminNotice';
import AdminArticle from './adminComponents/AdminArticle';
import AdminTeam from './adminComponents/AdminTeam';
import Philoneist from './components/Philoneist';
import Opinion from './components/Opinion';
import History from './components/History';
import International from './components/International';
import Archives from './components/Archives';
import Reviews from './components/Reviews';
import Achievements from './components/Achievements';
import More from './components/More';
import Politics from './components/Politics';
import Notice from './components/Notice'; // Import the Notice component

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminArticle />} />
          <Route path="/adminAchievement" element={<AdminAchievement />} />
          <Route path="/adminAlumni" element={<AdminAlumni />} />
          <Route path="/adminLeadership" element={<AdminLeadership />} />
          <Route path="/adminNotice" element={<AdminNotice />} />
          <Route path="/adminTeam" element={<AdminTeam />} />
          <Route path="/" element={<HomePage />} />
          <Route path="politics" element={<Politics />} />
          <Route path="/philoneist" element={<Philoneist />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="history" element={<History />} />
          <Route path="international" element={<International />} />
          <Route path="archives" element={<Archives />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/article" element={<Article />} />
          <Route path="/team" element={<Team />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/notice" element={<NoticeBoard />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/more" element={<More />} />
          <Route path="/notice-detail" element={<Notice />} /> {/* Add this line */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
