import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCart from './PriceCart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PriceCart />
    </>
  )
}

export default App
