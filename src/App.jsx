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

function App() {
  // function Home() {
  //   return <h2 className="text-center mt-20">Welcome to Home Page</h2>;
  // }
  
  function About() {
    return <h2 className="text-center">About Us<OurTeam/></h2>;
  }
  
  function Services() {
    return <h2 className="text-center ">Our services</h2>;
  }
  
  function Contact() {
    return <h2 className="text-center ">Contact Us</h2>;
  }
  return (
    <div>
    <BrowserRouter>
       <div>
      <NavBar />
      </div>
      <div className='  w-full mt-10 '>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
