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

const Portfolio = () => {
  return (
    <div>
      {/* Portfolio */}
      <Header />
      <Banner />
      <About />
      <Skills/>
      <Projects/>
      <Hire/>
      <Contact/>
      <Footer/>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/' element={<Banner/>}/>
          <Route path='/' element={<About/>}/>

        </Routes>
      </Router> */}
    </div>
  )
}

export default Portfolio
