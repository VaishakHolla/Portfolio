import React from 'react'
import Contact from '../contact';
import AboutMe from '../about_me';
import Projects from '../projects';
import Testimonials from '../testimonials';
import Skills from '../skills';
import Navbar from '../navbar'
const Home = () => {
    return (
        <div className="text-gray-400 bg-gray-900 body-font">
            <Navbar/>
            <AboutMe/>
            <Projects/>
            {/* <Testimonials/> */}
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Home
