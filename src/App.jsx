import { useState } from 'react'
import Signup from './components/Signup'
import Success from './components/Success'

const App = () => {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Signup submitted={submitted} setSubmitted={setSubmitted} />
      <Success submitted={submitted} setSubmitted={setSubmitted} />
    </>
  )
}

export default App
