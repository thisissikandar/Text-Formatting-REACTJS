import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import "./style.scss"

const Footer = () => {
  return (
    <footer className='footer' >
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique rerum magnam fuga repellendus possimus facilis officia facere, perferendis, neque at quisquam consectetur tempora magni et dolores consequuntur fugit accusantium.
        </div>
{/* Start Social Icons */}
<div className="socialIcons">
  <span className="icon">
    <FaFacebookF/>
  </span>
  <span className="icon">
    <FaInstagram/>
  </span>
  <span className="icon">
    <FaTwitter/>
  </span>
  <span className="icon">
    <FaLinkedin/>
  </span>
</div>
{/* End Social Icons */}

      </ContentWrapper>
      
    </footer>
  )
}

export default Footer