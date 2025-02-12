import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Projects from './Projects'
import Skills from './Skills';
import Hire from './Hire';
import Contact from './Contact';
import Footer from './Footer';
import FrontPage from './FrontPage';

const Portfolio = () => {
  return (
    <div>
      {/* Portfolio */}
      <Router basename="/masterPortfolio">
          <Header/>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/home' element={<FrontPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/hire' element={<Hire />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default Portfolio
