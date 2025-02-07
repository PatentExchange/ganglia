import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'

// import { Route, Router } from 'lucide-react'

import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import OurTeam from './Components/HomePage/OurTeam'
import Footer from './Components/Footer'
import WhoAreWe from './Components/HomePage/WhoAreWe'
import {Home}  from './Components/HomePage/Home'
import {AboutUs} from './Components/AboutUs'
import OurApproach from './Components/OurApproach'
import ContactUs from './Components/ContactUs'
import Milestones from './Components/Milestones'
import OurServices from './Components/OurServices'
import { OurProducts } from './Components/OurProducts'
import Blog from './Components/Blog'
import { useEffect } from 'react'
import ProductDetail from './Components/ProductDetail'
import AwardDetails from './Components/AwardDetails'

function App() {
  
  return (
    <div>
    <BrowserRouter>
       <div >
      <NavBar />
      </div>
      <div className='  w-full mt-14'>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices/>} />
          <Route path="/ourproducts" element={<OurProducts/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/product-detail/:title" element={<ProductDetail/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
