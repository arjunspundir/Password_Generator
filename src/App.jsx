import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PassContainer from './Component/PassContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PassContainer/>
    </>
  )
}

export default App
