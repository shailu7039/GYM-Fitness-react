import React from 'react'
import Banner from './components/Banner'
import Fitnesspower from './components/Fitnesspower'
import OurClasses from './components/OurClasses'
import Member from './components/Member'
import ChoosePlan from './components/ChoosePlan'
import OurTrainers from './components/OurTrainers'
import LatestsNews from './components/LatestsNews'
import FollowInstagram from './components/FollowInstagram'
import AboutSwiper from '../aboutus/components/AboutSwiper'

export default function Home() {
  return (
    <div className="pt-20 ">
     <Banner/>
      <Fitnesspower />
      <OurClasses />
      <AboutSwiper/>
      <Member />
      <ChoosePlan />
      <OurTrainers />
      <LatestsNews />
      <FollowInstagram/>
    </div>
  )
}
