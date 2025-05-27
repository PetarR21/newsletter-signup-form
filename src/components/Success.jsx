import iconSuccess from '../assets/images/icon-success.svg'

const Success = ({ submitted, setSubmitted }) => {
  if (!submitted) {
    return null
  }

  return (
    <div className='card card--success'>
      <img src={iconSuccess} alt='Success Icon' />
      <h1 className='card__title'>Thanks for subscribing!</h1>
      <p className='card__text'>
        A confirmation email has been sent to{' '}
        <strong>ash@loremcompany.com</strong>. Please open it and click the
        button inside to confirm your subscription.
      </p>
      <button
        onClick={() => {
          setSubmitted(false)
        }}
        className='card__button'
      >
        Dismiss message
      </button>
    </div>
  )
}

export default Success
