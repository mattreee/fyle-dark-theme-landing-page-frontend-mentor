import React from 'react'

const Features = () => {
  return (
    <section className='features'>
      <div className='features__feature'>
        <h2 className='features__title'>Access your files, anywhere</h2>
        <p className='features__desc'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
      </div>

      <div className='features__feature'>
        <h2 className='features__title'>Security you can trust</h2>
        <p className='features__desc'>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
      </div>

      <div className='features__feature'>
        <h2 className='features__title'>Real-time collaboration</h2>
        <p className='features__desc'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
      </div>

      <div className='features__feature'>
        <h2 className='features__title'>Store any type of file</h2>
        <p className='features__desc'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
      </div>
    </section>
  )
}

export default Features