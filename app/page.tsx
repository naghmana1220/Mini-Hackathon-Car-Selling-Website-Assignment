import React from 'react'
import HeroSection from './Components/HeroSection'
import Feature from './Components/Feature'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


export default function  Home() {
  return (
    <div> 
        <Navbar /> 
        <br />
        <hr /> 
        <HeroSection />  
        <br />
        <Feature /> 
        <Footer /> 
      
    </div>
  )
}

