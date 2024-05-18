import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateComponent from './components/PrivateComponent'
import HomePage from "./components/HomePage"
import AdminLogin from "./components/AdminLogin"
import Article from "./components/Article"
import CurrentMembersPage from "./components/CurrentMembersPage"
import ExecutiveMembersPage from "./components/ExecutiveMembersPage"
import PastMembersPage from "./components/PastMembersPage"
import NoticeBoard from "./components/NoticeBoard"
import AdminAchievement from "./adminComponents/AdminAchievement"
import AdminAlumni from "./adminComponents/AdminAlumni"
import AdminLeadership from "./adminComponents/AdminLeadership"
import AdminNotice from "./adminComponents/AdminNotice"
import AdminPage from "./adminComponents/AdminPage"
import AdminTeam from "./adminComponents/AdminTeam"
import Philoneist from "./components/Philoneist"
import Opinion from "./components/Opinion"
import Reviews from './components/Reviews'
import History from "./components/History"
import International from "./components/International"
import Archieves from "./components/Archives"

const App = () => {
  return (
    <>

      <div className='App'>
        <BrowserRouter>

          <Routes>


            {/* <Route element={<PrivateComponent />}> */}
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/adminAchievement" element={<AdminAchievement />} />
              <Route path="/adminAlumni" element={<AdminAlumni />} />
              <Route path="/adminLeadership" element={<AdminLeadership />} />
              <Route path="/adminNotice" element={<AdminNotice />} />
              <Route path="/adminPage" element={<AdminPage />} />
              <Route path="/adminTeam" element={<AdminTeam />} />
            {/* </Route> */}

            <Route path="/" element={<HomePage />} />
            <Route path="philoneist" element={<Philoneist />} />
            <Route path="opinion" element={<Opinion />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="history" element={<History />} />
            <Route path="international" element={<International />} />
            <Route path="archives" element={< Archieves />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/article" element={<Article />} />
            <Route path="/team" element={<CurrentMembersPage />} />
            <Route path="/leadership" element={<ExecutiveMembersPage />} />
            <Route path="/alumni" element={<PastMembersPage />} />
            <Route path="/notice" element={<NoticeBoard />} />

          </Routes>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App