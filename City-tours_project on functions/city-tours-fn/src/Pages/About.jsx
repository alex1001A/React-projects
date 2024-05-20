import React from 'react'

import AboutSection from '../Components/About/AboutSection'

import { tourData } from "../data/tourData";
import Mission from '../Components/About/Mission-section';

function About() {
    return (
        <div className='container'>
            <AboutSection/>
            <Mission/>
        </div>
    )
}

export default About