import React from 'react'
import ProfileSatish from '../images/profile-1.jpg';
import ProfileBruce from '../images/profile-2.jpg';
import ProfileIva from '../images/profile-3.jpg';

const Testimonies = () => {
  return (
    <section className='testimonies'>
      <div className='testimonies__card'>
        <p className='testimonies__desc'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='testimonies__person'>
          <img className='testimonies__pic' src={ProfileSatish} alt='' />
          <p className='testimonies__name'>Satish Patel</p>
          <p className='testimonies__position'>Founder & CEO, Huddle</p>
        </div>
      </div>

      <div className='testimonies__card'>
        <p className='testimonies__desc'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='testimonies__person'>
          <img className='testimonies__pic' src={ProfileBruce} alt='' />
          <p className='testimonies__name'>Bruce McKenzie</p>
          <p className='testimonies__position'>Founder & CEO, Huddle</p>
        </div>
      </div>

      <div className='testimonies__card'>
        <p className='testimonies__desc'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
        <div className='testimonies__person'>
          <img className='testimonies__pic' src={ProfileIva} alt='' />
          <p className='testimonies__name'>Iva Boyd</p>
          <p className='testimonies__position'>Founder & CEO, Huddle</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonies