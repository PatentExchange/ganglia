import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

// import { Route, Router } from 'lucide-react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

import OurTeam from './Components/HomePage/OurTeam'
import Footer from './Components/Footer'
import WhoAreWe from './Components/HomePage/WhoAreWe'
import {Home}  from './Components/HomePage/Home'
import {AboutUs} from './Components/AboutUs'
import OurApproach from './Components/OurApproach'

function App() {
  const [count, setCount] = useState(0)
  // function Home() {
  //   return <h2 className="text-center mt-20">Welcome to Home Page</h2>;
  // }
  
  function About() {
    return <h2 className="text-center">About Us<OurTeam/></h2>;
  }
  
  function Services() {
    return <h2 className="text-center">Our Services</h2>;
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
      <div className='  w-full '>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurApproach/>} />
          <Route path="/contact" element={<WhoAreWe />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
      
    </div>
  )
}

export default App
