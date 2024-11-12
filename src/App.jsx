import Profile from './Component/Profile/Profile'
import TimeTracking from './Component/TimeTracking/TimeTracking'

import './App.css'
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState("weekly");

  const handleClick = (timeframe) => {
      setSelected(timeframe)
  }

  return (
    <>
    <main className='lg:w-full lg:h-screen lg:flex lg:justify-center lg:items-center'>
      <div className='mt-14 mb-14 pl-6 pr-6 grid gap-6 lg:grid-cols-4 lg:w-[80%]'>
        <Profile selected={selected} handleClick={handleClick}/>
        <TimeTracking selected={selected}/>
      </div>
    </main>
    </>
  )
}

export default App
