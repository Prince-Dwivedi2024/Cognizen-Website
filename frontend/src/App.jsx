import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import HomePage from "./components/HomePage";
import AdminLogin from "./components/AdminLogin";
import Article from "./components/Article";
import CurrentMembersPage from "./components/CurrentMembersPage";
import ExecutiveMembersPage from "./components/ExecutiveMembersPage";
import PastMembersPage from "./components/PastMembersPage";
import NoticeBoard from "./components/NoticeBoard";
import AdminAchievement from "./adminComponents/AdminAchievement";
import AdminAlumni from "./adminComponents/AdminAlumni";
import AdminLeadership from "./adminComponents/AdminLeadership";
import AdminNotice from "./adminComponents/AdminNotice";
import AdminPage from "./adminComponents/AdminPage";
import AdminTeam from "./adminComponents/AdminTeam";
import Philoneist from "./components/Philoneist";
import Opinion from "./components/Opinion";
import Reviews from './components/Reviews';
import History from "./components/History";
import International from "./components/International";
import Archives from "./components/Archives";
import Layout from './Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        
        <Route element={<Layout />}>  {/* Wrap routes with Layout */}
          <Route path="/" element={<HomePage />} />
          <Route path="philoneist" element={<Philoneist />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="history" element={<History />} />
          <Route path="international" element={<International />} />
          <Route path="archives" element={<Archives />} />
          <Route path="/article" element={<Article />} />
          <Route path="/team" element={<CurrentMembersPage />} />
          <Route path="/leadership" element={<ExecutiveMembersPage />} />
          <Route path="/alumni" element={<PastMembersPage />} />
          <Route path="/notice" element={<NoticeBoard />} />
        </Route>

        <Route element={<PrivateComponent />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminAchievement" element={<AdminAchievement />} />
          <Route path="/adminAlumni" element={<AdminAlumni />} />
          <Route path="/adminLeadership" element={<AdminLeadership />} />
          <Route path="/adminNotice" element={<AdminNotice />} />
          <Route path="/adminTeam" element={<AdminTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
