import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import Gallery from './Components/Gallery';
import About from './Components/About';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='container mx-auto' >
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/News" element={<News/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Courses" element={<Courses/>} />
            <Route path="/Gallery" element={<Gallery/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
