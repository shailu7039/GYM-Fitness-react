import React from 'react'
import AboutBanner from './components/AboutBanner'
import AboutFitness from './components/AboutFitness'
import AboutPlan from './components/AboutPlan'
import AboutTrainer from './components/AboutTrainer'
import FollowInstagram from '../home/components/FollowInstagram'
import AboutSwiper from './components/AboutSwiper'
const AboutUs = () => {
  return (
    <div className="pt-24">
          <AboutBanner />
          <AboutFitness />
          <AboutPlan />
          <AboutTrainer />
          <AboutSwiper/>
          <FollowInstagram/>
    </div>
  )
}

export default AboutUs
