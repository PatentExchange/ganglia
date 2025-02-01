import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
// import { Route, Router } from 'lucide-react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import { Example } from './Example'
import OurTeam from './Components/OurTeam'
import OurServices from './Components/OurServices'
import { OurProducts } from './Components/OurProducts'

function App() {
  const [count, setCount] = useState(0)
  // function Home() {
  //   return <h2 className="text-center mt-20">Welcome to Home Page</h2>;
  // }
  
  function About() {
    return <h2 className="text-center">About Us</h2>;
  }
  
  function Services() {
    return <h2 className="text-center "><OurServices></OurServices></h2>;
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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </BrowserRouter>
      
    </div>
  )
}

export default App
