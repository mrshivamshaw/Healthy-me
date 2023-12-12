import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"; // Integrated changes from main
import Footer from './components/Footer/Footer' // Integrated changes from footer

function App() {
  return (
    <div className='w-[100vw] h-auto box-border'>
      <Navbar/>
      <Routes> {/* Use Routes and Route from react-router-dom */}
        <Route path="/your-path" element={<YourComponent />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App

