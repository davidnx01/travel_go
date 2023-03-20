import React from 'react'
import "./Footer.css"
import { logoBlack, googlePlay, playStore} from "../../assets/index"
import { FooterNavigation } from '../../components'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const footer = () => {
  return (
    <footer>
      <div className='footer-wrap'>
        <div className='footer_left-side'>
          <img 
            src={logoBlack}
            alt="logo"
          />

          <p>
            Book your trip in minute, get full
            Control for much longer.
          </p>
        </div>

        <div className='footer_center'>
          <FooterNavigation />
        </div>

        <div className='footer_right-side'>
          <div className='footer_right-side__first-row'>
            <div className='footer-icon'>
              <FaFacebookF size={22} />
            </div>
            <div className='footer_right-side__instagram-icon footer-icon'>
              <FaInstagram size={22} color='white' />
            </div>
            <div className='footer-icon'>
              <FaTwitter size={22} />
            </div>
          </div>

          <div className='footer_right-side__second-row'>
            <p>Discover our app</p>
          </div>

          <div className='footer_right-side__third-row'>
            <img 
              src={googlePlay}
              alt="Google Play Download"
            />

            <img 
              src={playStore}
              alt="Play Store Download"
            />
          </div>
        </div>
      </div>

      <div className='footer-copyright'>
        <p>Dávid Roman <span><em>2023-03-20</em></span></p>
      </div>
    </footer>
  )
}

export default footer