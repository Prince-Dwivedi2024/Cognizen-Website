import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element= {<Layout/>}>
     
     {/* <Route path='' element= {<Home/>} />
     <Route path='articles' element= {<Articles/>} />
     <Route path='philoneist' element= {<Philoneist/>} />
     <Route path='opinion' element= {<Opinion/>} />
     <Route path='politics' element= {<Politics/>} />
     <Route path='history' element= {<History/>} />
     <Route path='international' element= {<International/>} />
     <Route path='search' element= {<Search/>} /> */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
