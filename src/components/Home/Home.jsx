import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import HelpTopics from '../HelpTopics/HelpTopics'
import Footer from '../Footer/Footer'
import FeaturesWeProvide from '../FeaturesWeProvide/FeaturesWeProvide'

const Home = () => {
  return (
    <div div className='w-[100vw] relative h-auto box-border overflow-x-hidden bg-white'>
        <Navbar/>
        <HeroSection/>
        <FeaturesWeProvide />
        <HelpTopics/>
        <Footer/>
    </div>

  )
}

export default Home