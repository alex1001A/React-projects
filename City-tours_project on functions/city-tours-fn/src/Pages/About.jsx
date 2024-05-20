import React from 'react'

import AboutSection from '../Components/About/AboutSection'

import Mission from '../Components/About/Mission-section';
import SomeTours from '../Components/About/SomeTours';

function About() {
    return (
        <div className='container'>
            <AboutSection />
            <Mission />
            <SomeTours />

        </div>
    )
}

export default About