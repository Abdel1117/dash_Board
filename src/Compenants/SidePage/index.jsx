import React from 'react'
import Home from '../../Page/Home/Home'
import Statistics from '../../Page/Statistics/Statistics'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

export default function SidePage() {
  return (
    <main className='w-full p-8'>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Statistics' element={<Statistics />} />
                <Route />
                <Route />
            </Routes>
        </BrowserRouter>
    </main>
  )
}
