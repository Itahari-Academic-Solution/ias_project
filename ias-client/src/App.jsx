import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Courses from "./Components/Courses";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import { Button, Carousel } from 'flowbite-react';
import Footer from "./Components/Footer";
import 'remixicon/fonts/remixicon.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="relative">
        {/* Background (hero section) */}
        <div className="hero h-[480px] opacity-60 absolute inset-0 z-0"></div>

        {/* Foreground (navbar or other content) */}
        <div className="relative z-10">
          <Navbar />
          {/* Your foreground content here */}
          <div className="text-center  items-center mt-10">
            {/* <h1 className="text-black text-4xl">Welcome to the Hero Section</h1> */}
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>

      
      <div className="div">
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
