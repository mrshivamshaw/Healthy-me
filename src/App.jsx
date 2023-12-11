import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='w-[100vw] h-auto box-border'>
      <Navbar/>
      <Footer />
    </div>
  )
}

export default App
