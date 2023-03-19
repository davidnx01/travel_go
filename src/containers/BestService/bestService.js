import React from 'react'
import "./BestService.css"
import { worldMapCenter } from "../../assets/index"
import { bestServiceBoxConts } from '../../constants/bestServiceConts'

const bestService = () => {
  return (
    <section id='bestService'>
      <img 
        src={ worldMapCenter }
        alt="World Map Background"
      />
      <div className='heading-box'>
        <h2>
          We always try to give you<br></br>
          the best advice
        </h2>

        <p>
          We always try to make our customer Happy. 
          We provide all kind of facilities. 
          Your Satisfaction is our main priority.
        </p>
      </div>

      <div className='flex center-between best-service-wrap'>
        {bestServiceBoxConts.map((box) => (
          <div className='best-service-box'>
            <span>{box.icon}</span>
            <h4>{box.number}</h4>
            <p>{box.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default bestService