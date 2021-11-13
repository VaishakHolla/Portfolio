import React from 'react'
import Contact from '../contact';
import AboutMe from '../about_me';
import Projects from '../projects';
import Testimonials from '../testimonials';

const Home = () => {
    return (
        <div>
            <Contact/>
            <AboutMe/>
            <Projects/>
            <Testimonials/>
        </div>
    )
}

export default Home
