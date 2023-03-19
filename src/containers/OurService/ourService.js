import React from 'react'
import "./OurService.css"

import { BsTicketPerforated } from "react-icons/bs"
import { TbBed } from "react-icons/tb"
import { IoPaperPlaneOutline } from "react-icons/io"
import { ourServiceConts } from '../../constants/serviceConts'

const ourService = () => {
  return (
    <section id='ourService'>
      <h2>Our Service</h2>
      <div className='flex center-between our-service_wrap'>
          {ourServiceConts.map((box) => (
          <div className='flex our-service_box'>
              <span>{box.icon}</span>
              <h4>{box.title}</h4>
              <p>{box.text}</p>
          </div>
          ))}
      </div>
    </section>
  )
}

export default ourService