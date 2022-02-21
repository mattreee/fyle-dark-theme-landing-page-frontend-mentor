import React from 'react'

const Subscribe = () => {
  return (
    <section className='subscribe'>
      <form className='subscribe__form'>
        <h2 className='subscribe__title'>Get early access today</h2>

        <p className='subscribe__desc'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <div className='subscribe__form-inputs'>
          <label className='subscribe__label'>
            <input className='subscribe__email' type="email" name='email' />
          </label>
          <input className='subscribe__submit' type="submit" value="Get Started For Free" />
        </div>
      </form>
    </section>
  )
}

export default Subscribe