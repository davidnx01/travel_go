import React from 'react'
import { navLinks } from '../../constants/navConts';
import "./Navbar.css";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import {logo} from "../../assets/index"

const navbar = () => {
  return (
      <nav className='flex center-between'>
        <img 
          src={logo}
          alt="Travel Goo logo"
          width="76"
          height="60"
        />

        <ul>
          {navLinks.map((item) => (
          <li>
            <a href={item.id}>{item.title}</a>
          </li>
          ))}
        </ul>

        <div className='flex nav__icons'>
          <AiOutlineStar 
            color='#FF7A00'
            size={35}
            cursor="pointer"
          />
          <AiOutlineUser 
            color="white"
            size={35}
            cursor="pointer"
          />
        </div>
      </nav>
  )
}

export default navbar