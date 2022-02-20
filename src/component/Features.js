import React from 'react'
import IconAnywhere from '../images/icon-access-anywhere.svg';
import IconSecurity from '../images/icon-security.svg';
import IconCollaboration from '../images/icon-collaboration.svg';
import IconAnyFile from '../images/icon-any-file.svg';

const Features = () => {
  return (
    <section className='features'>
      <div className='features__feature'>
        <img className='features__icon' src={IconAnywhere} alt='' />
        <h2 className='features__title'>Access your files, anywhere</h2>
        <p className='features__desc'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
      </div>

      <div className='features__feature'>
        <img className='features__icon' src={IconSecurity} alt='' />
        <h2 className='features__title'>Security you can trust</h2>
        <p className='features__desc'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
      </div>

      <div className='features__feature'>
        <img className='features__icon' src={IconCollaboration} alt='' />
        <h2 className='features__title'>Real-time collaboration</h2>
        <p className='features__desc'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
      </div>

      <div className='features__feature'>
        <img className='features__icon' src={IconAnyFile} alt='' />
        <h2 className='features__title'>Store any type of file</h2>
        <p className='features__desc'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
      </div>
    </section>
  )
}

export default Features