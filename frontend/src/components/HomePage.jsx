//user landing page for articles and notices
import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"

const HomePage = () => {
  return (
    <div>
      <Nav/>
      <Footer/>
    </div>
  )
}

export default HomePage