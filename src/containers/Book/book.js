import React from 'react'
import EasyStep from '../../components/EasyStep/EasyStep'
import "./Book.css"
import { bookImg, bookElipse } from '../../assets'

const book = () => {
  return (
    <section id='book'>
      <div className='heading-box'>
        <h2>
          Book Your Next Trip in 3 Easy Steps
        </h2>

        <p>
          Easy and Fast
        </p>
      </div>

      <div className='flex center-between book-wrap'>
        <div className='book-content_left-side'>
          <EasyStep />
        </div>

        <div className='book-content_right-side'>
          <div className='book-relative'>
            <img 
              src={bookImg}
              alt="Booking"
            />
            <div className='book-elipse'>
              <img 
                src={bookElipse}
                alt="bookElipse"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default book