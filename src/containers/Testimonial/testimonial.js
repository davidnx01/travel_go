import React from 'react'
import "./Testimonial.css"
import {testimonialAvatar} from "../../assets/index"

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h2>What People Say About Us</h2>

      <div className='testimonial-wrap'>
        <div className='testimonial-photo'>
          <div className='testimonial-card'>
            <div className='testimonial-card_photo'>
              <img 
                src={testimonialAvatar}
              />
            </div>

            <div className='testimonial-card_content'>
                <p>
                  Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit ut aliquam, 
                  purus sit amet luctus venenatis, lectus
                  magna fringilla urna, porttitor
                </p>

                <h3>-Jeo Stanlee</h3>
              </div>
          </div>
        </div>


      </div>


    </section>
  )
}

export default testimonial