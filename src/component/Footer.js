import React from 'react'
import Logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='' />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

      <div>
        <p>+1-543-123-4567</p>
        <p>example@fylo.com</p>
      </div>

      <ul>
        <li>About Us</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Blog</li>
      </ul>

      <ul>
        <li>Contact Us</li>
        <li>Terms</li>
        <li>Privacy</li>
      </ul>
    </footer>
  )
}

export default Footer