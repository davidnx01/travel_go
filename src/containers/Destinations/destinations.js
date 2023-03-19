import React from 'react'
import "./Destinations.css"
import { DestinationTab } from "../../components/index"
import { WorldMapLeft } from "../../assets/index"

const destinations = () => {
  return (
    <section id='destinations'>
      <h2>Our Popular Destinations</h2>
        <div className='flex center-between destinations-wrap'>
          <div className='dummy_side'>
            <img
              src={WorldMapLeft}
            />
          </div>

          <div className='destinations_right-side'>
            <DestinationTab />
          </div>
        </div>
    </section>
  )
}

export default destinations