import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Components/Header/Header'
import Home from './Components/body/Home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-between'>

    <Outlet/>
    <Header/>
    </div>
    </>
  )
}

export default App
