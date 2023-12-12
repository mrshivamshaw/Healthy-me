import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"; // Integrated changes from main
import Footer from './components/Footer/Footer' // Integrated changes from footer
import Home from './components/Home/Home';
import About from './components/About/About';
import HowToUse from './components/HowToUse/HowToUse';
import Login from './components/Login/Login'

function App() {
  return (
    <div className='w-[100vw] h-auto box-border bg-[#F3F3FD]'>
      <Navbar />
      <Routes> {/* Use Routes and Route from react-router-dom */}
        <Route path='/' >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="howtouse" element={<HowToUse />} />
        <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

