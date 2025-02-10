import React from 'react'
import Header from './Header'
import Banner from './Banner'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hire from './Hire'
import Projects from './Projects'
import Skills from './Skills'

const FrontPage = () => {
    return (
        <div>
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Hire />
            <Contact />
            <Footer />
        </div>
    )
}

export default FrontPage
