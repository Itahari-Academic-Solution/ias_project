import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import IASLogo from '../assets/Logo/ias.png';
import mapImage from '../assets/map/map.png';
import Popup from './Popup';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to add active class based on the current route
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? 'block py-2 pl-3 pr-4 text-white bg-pink-700 rounded lg:bg-transparent lg:text-pink-700 lg:p-0' 
      : 'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-pink-700 lg:p-0';
  };

  return (
    <>
      <nav className="border-gray-200 py-2.5 z-10 px-8">
        <div className="flex flex-wrap items-center justify-between px-4 w-full h-full">
          <Link to="/" className="flex items-center gap-4">
            <img src={IASLogo} style={{ height: '64px' }} className="mr-3 sm:h-9" alt="IAS Logo" />
            <span className="self-center text-sm font-medium whitespace-nowrap">Itahari Academic Solution</span>
          </Link>
          <div className="flex items-center lg:order-2">
           <Popup/>
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2" 
              aria-expanded={isMobileMenuOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 text-sm font-light lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" className={`nav-link ${getLinkClass('/')}`}>Home</Link>
              </li>
              <li>
                <Link to="/Courses" className={`nav-link ${getLinkClass('/Courses')}`}>Courses</Link>
              </li>
              <li>
              <Link to="/Gallery" className={`nav-link ${getLinkClass('/Gallery')}`}>Gallery</Link>
              </li>
              <li>
              <Link to="/News" className={`nav-link ${getLinkClass('/News')}`}>News</Link>
              </li>
              <li>
              <Link to="/About" className={`nav-link ${getLinkClass('/About')}`}>About</Link>
              </li>
              <li>
              <Link to="/Contact" className={`nav-link ${getLinkClass('/Contact')}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
