import React from 'react'
import "./Newsletter.css"
import { BsEnvelope } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { newsletterBottomDesign } from "../../assets/index"

const newsletter = () => {
  return (
    <section id='newsletter'>
      <div className='newsletter-card'>
        <div className='newsletter-card_top-right__design'>
          <FaTelegramPlane size={40} color="white" />
        </div>
        <p>
          Subscribe to get information, latest news and other
          interesting offers about Cobham
        </p>

        <form>
          <div className='newsletter__email-input'>
            <BsEnvelope 
              className='newsletter__email-input_icon'
              color='#39425D'
            />
            <input 
              placeholder='Your Email'
              type="email"
              className='email_input'
            />
          </div>

          <input 
            type="button"
            value="Subscribe"
            className='button_input'
          />
        </form>

        <div className='newsletter-card_bottom-right__design'>
          <img 
            src={newsletterBottomDesign}
          />
        </div>
      </div>



    </section>
  )
}

export default newsletter