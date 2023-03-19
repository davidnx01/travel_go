import React from 'react'
import "../OnePackage/OnePackage.css"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HotDealsConts } from '../../../constants/packageConts'

const hotDealsTab = () => {
  return (
    <>
      {HotDealsConts.map((tab) => (
        <div className='one-package_box'>
            <div className='one-package_box__upper-part'>
              <img
                 src={tab.image}
                 alt={tab.imgAlt}
              />
            </div>
        
            <div className='one-package_box__lower-part'>
              <div className='flex center-between     one-package_box__lower-part-first-row'>
                <span>{tab.daynNight}</span>
                <span>{tab.perPerson}</span>
              </div>
        
              <div className='one-package_box__lower-part-second-row'>
                <p>{tab.description}</p>
              </div>
        
              <div className='flex center-between     one-package_box__lower-part-third-row'>
                <div className='flex center-between package-location'>
                  <HiOutlineLocationMarker />
                  <h4>{tab.country}</h4>
                </div>
        
                  <a href={tab.link}>Know More</a>
              </div>
            </div>
        </div>
      ))}
  </>
  )
}

export default hotDealsTab