import React from 'react'
import { destinationTabConts } from '../../constants/destinationTabConts';
import "./DestinationTab.css";
import { RiArrowRightSLine } from "react-icons/ri"

const destinationTab = () => {
  return (
    <>
        {destinationTabConts.map((tab) => (
            <div className='flex center-between destination-tab'>
            <div className='destination-tab_left-side'>
                <img 
                    src={tab.image}
                    alt={tab.imgAlt}
                />
            </div>
            
            <div className='flex center-between destination-rab_right-side'>
                <p>{tab.country}</p>
                <div>
                    <p>{tab.spots}</p>
                    <p>{tab.DandN}</p>
                </div>
                <RiArrowRightSLine 
                    size={26}
                    cursor="pointer"
                />
            </div>
            </div>
        ))}
    </>
  )
}

export default destinationTab