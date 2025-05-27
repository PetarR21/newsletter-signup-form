import illustrationDesktop from '../assets/images/illustration-sign-up-desktop.svg'
import illustrationMobile from '../assets/images/illustration-sign-up-mobile.svg'
import { useState } from 'react'

const Signup = ({ submitted, setSubmitted }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  if (submitted) {
    return null
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const submit = (event) => {
    event.preventDefault()

    if (isValidEmail(email)) {
      setError(false)
      setSubmitted(true)
      setEmail('')
    } else {
      setError(true)
    }

    console.log(email)
  }
  return (
    <div className='card'>
      <div className='card__left'>
        <h1 className='card__title'>Stay updated!</h1>
        <p className='card__text'>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className='card__list'>
          <li className='card__list-item card__text'>
            Product discovery and building what matters
          </li>
          <li className='card__list-item card__text'>
            Measuring to ensure updates are a success
          </li>
          <li className='card__list-item card__text' alt='check mark'>
            And much more!
          </li>
        </ul>
        <form className='card__form' onSubmit={submit} noValidate>
          <div className='card__input-group'>
            <div className='card__labels'>
              <label className='card__label' htmlFor='email'>
                Email address
              </label>
              <label
                className={`card__label card__label--error ${
                  error ? '' : 'hidden'
                }`}
                htmlFor='email'
              >
                Valid email required
              </label>
            </div>
            <input
              className={`card__input ${error ? 'error' : ''}`}
              type='email'
              id='email'
              placeholder='email@company.com'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <button className='card__button' type='submit'>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className='card__right'>
        <img
          src={illustrationDesktop}
          alt='Desktop Illustration'
          className='card__image card__image--desktop'
        />
        <img
          src={illustrationMobile}
          alt='Desktop Illustration'
          className='card__image card__image--mobile'
        />
      </div>
    </div>
  )
}

export default Signup
