import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

// import { Route, Router } from 'lucide-react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'

import OurTeam from './Components/OurTeam'
import WhoAreWe from './Components/WhoAreWe'
import {Home}  from './Home'

function App() {
  const [count, setCount] = useState(0)
  // function Home() {
  //   return <h2 className="text-center mt-20">Welcome to Home Page</h2>;
  // }
  
  function About() {
    return <h2 className="text-center">About Us</h2>;
  }
  
  function Services() {
    return <h2 className="text-center ">Our Services</h2>;
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
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<Example />} /> */}
          <Route path="/services" element={<OurTeam/>} />
          <Route path="/contact" element={<WhoAreWe />} />
        </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  )
}

export default App
