import React from 'react'
import { FooterNavigationConts } from '../../constants/footerNavConts'
import "./FooterNavigation.css"

const FooterNavigation = () => {
  return (
        <div className='footer-navigation'>
            {FooterNavigationConts.map((tab) => (
                <>
                <div className='footer_inner-nav'>
                    <h4>{tab.title}</h4>
                    <ul>
                        <li><a href='#'>{tab.firstTab}</a></li>
                        <li><a href='#'>{tab.secondTab}</a></li>
                        <li><a href='#'>{tab.thirdTab}</a></li>
                    </ul>
                </div>    
                </>
            ))}
        </div>
  )
}

export default FooterNavigation