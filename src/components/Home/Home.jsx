import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import HelpTopics from '../HelpTopics/HelpTopics'
import Footer from '../Footer/Footer'
import FeaturesWeProvide from '../FeaturesWeProvide/FeaturesWeProvide'
import AboutForHome from '../About/AboutForHome'

const Home = () => {
  return (
    <div className='relative h-auto box-border'>
        <Navbar/>
        <HeroSection/>
        <FeaturesWeProvide />
        <HelpTopics />
        <AboutForHome />
        <Footer/>
    </div>

  )
}

export default Home