import { useState } from 'react'
import Couter from './pages/Couter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Couter />
    </>
  )
}

export default App
