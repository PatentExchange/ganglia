import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = ["Home", "About Us", "Services", "Blog", "Contact"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Home");

  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2">
          <img src="/assets/images/gangliaLogo.png" className="h-8 w-8"/>
        <h1 className="text-xl font-bold">Ganglia</h1>
        </div>
        {/* Desktop Navigation with ChipTabs effect */}
        <div className="hidden md:flex space-x-6 text-lg relative">
          {tabs.map((tab) => (
            <Link
              key={tab}
              to={tab === "Home" ? "/" : tab === "About Us" ? "/about" :`/${tab.toLowerCase()}`}

              onClick={() => setSelected(tab)}
              className="relative text-white px-4 py-1 rounded-md"
            >
              <span className="relative z-10">{tab}</span>
              {selected === tab && (
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: "spring", duration: 1 }}
                  className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
                ></motion.span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4 absolute top-full left-0 w-full">
          <p><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></p>
          <p><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></p>
          <p><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></p>
          <p><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></p>
        </div>
      )}
    </nav>
  );
}
