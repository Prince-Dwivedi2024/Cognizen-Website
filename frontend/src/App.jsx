import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateComponent from './components/PrivateComponent'
import AdminPage from "./components/AdminPage"
import HomePage from "./components/HomePage"
import AdminLogin from "./components/AdminLogin"
import Article from "./components/Article"
import CurrentMembersPage from "./components/CurrentMembersPage"
import ExecutiveMembersPage from "./components/ExecutiveMembersPage"
import PastMembersPage from "./components/PastMembersPage"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import NoticeBoard from "./components/NoticeBoard"

const App = () => {
  return (
    <>
      
      <div className='App'>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>

            <Route path="/" element={<HomePage />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/article" element={<Article />} />
            <Route path="/team" element={<CurrentMembersPage />} />
            <Route path="/leadership" element={<ExecutiveMembersPage />} />
            <Route path="/alumni" element={<PastMembersPage />} />
            <Route path="/notice" element={<NoticeBoard />} />
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App