/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../images/logo.svg';

import IconLocation from '../images/icon-location.svg';
import IconPhone from '../images/icon-phone.svg';
import IconEmail from '../images/icon-email.svg';

import SocialFace from '../images/face_white_24dp.svg';
import SocialBird from '../images/thumb_up_white_24dp.svg';
import SocialCam from '../images/photo_camera_white_24dp.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img className='footer__logo' src={Logo} alt='' />

      <div className='footer__container'>
        <address className='footer__address'>
          <img className='footer__location' src={IconLocation} alt='' />
          <p className='footer__address-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='footer__address-info'>
            <p className='footer__address-phone'>
              <img className='icon-info' src={IconPhone} alt='' />
              +1-543-123-4567
            </p>
            <p className='footer__address-email'>
              <img className='icon-info' src={IconEmail} alt='' />
              example@fylo.com
            </p>
          </div>
        </address>
        <div className='footer__navs'>
          <ul className='footer__nav'>
            <li><a className='footer__nav-link' href='#'>About Us</a></li>
            <li><a className='footer__nav-link' href='#'>Jobs</a></li>
            <li><a className='footer__nav-link' href='#'>Press</a></li>
            <li><a className='footer__nav-link' href='#'>Blog</a></li>
          </ul>
          <ul className='footer__nav'>
            <li><a className='footer__nav-link' href='#'>Contact Us</a></li>
            <li><a className='footer__nav-link' href='#'>Terms</a></li>
            <li><a className='footer__nav-link' href='#'>Privacy</a></li>
          </ul>
          <ul className='footer__socials'>
            <li><a href='#'><img src={SocialFace} alt='' /></a></li>
            <li><a href='#'><img src={SocialBird} alt='' /></a></li>
            <li><a href='#'><img src={SocialCam} alt='' /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer