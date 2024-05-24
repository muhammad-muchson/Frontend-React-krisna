import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function Homepage() {
  return (
    <div>
        homepage
        <SideBar />
        <HeroSection />
        <Footer />
        <br />
        <div className="flex flex-col">
        <p className="font-extrabold text-heading1">Head1</p>
        <p className="font-bold text-heading2">Head2</p>
        <p className="font-semibold text-heading3">Head3</p>
        <p className="font-medium text-body1">Body1</p>
        <p className="font-regular text-body2">Body2</p>
      </div>
    </div>


  )
}
