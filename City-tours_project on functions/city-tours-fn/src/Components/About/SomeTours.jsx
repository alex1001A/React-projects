import React from 'react'

import { tourData } from "../../data/tourData";
import SomeTourCard from './SomeTourCard';


function SomeTours() {
    return (
        <div className='about-tours-section'>
            <h1> Tours<hr /></h1>
            <div className="about-tours">
                {
                    tourData.slice(0, 6).map((tour) => (
                        <SomeTourCard tour={tour} />
                    ))}
            </div>
        </div>
    )
}

export default SomeTours