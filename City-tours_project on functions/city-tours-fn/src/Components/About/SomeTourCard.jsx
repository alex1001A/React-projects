import React from 'react'

function SomeTourCard({tour}) {
    return (
        <div class="some-card">
            <div class="circle-container">
                <img src={tour.img}/>
                <h1>{tour.city}</h1>
            </div>
            <h2>{tour.country}</h2>
            <h4>{tour.city}</h4>
            <p>{tour.description}</p>
        </div>
    )
}

export default SomeTourCard