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
      <Router>
          <Header/>
        <Routes>
          <Route path='masterPortfolio/' element={<FrontPage />} />
          <Route path='masterPortfolio/home' element={<FrontPage />} />
          <Route path='masterPortfolio/about' element={<About />} />
          <Route path='masterPortfolio/skills' element={<Skills />} />
          <Route path='masterPortfolio/projects' element={<Projects />} />
          <Route path='masterPortfolio/hire' element={<Hire />} />
          <Route path='masterPortfolio/contact' element={<Contact />} />

        </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default Portfolio
