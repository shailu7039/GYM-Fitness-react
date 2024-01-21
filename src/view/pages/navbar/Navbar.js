import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div className='flex gap-4 bg-nav p-7  items-center justify-between fixed w-full z-index999'>
          <img src="https://powfit.jollyany.co/images/tz_powfit/Logo-POWFIT.svg" alt="" className='w-44' />
          <div className='flex gap-10  '>
               <Link to='/'><p className='text-white text-base font-semibold custmenuhoveractive'>HOME</p></Link> 
              <Link to="blog"><p className='text-white text-base font-semibold custmenuhoveractive'>BLOG</p></Link> 
              <Link to="about"><p className='text-white text-base font-semibold custmenuhoveractive'>PAGES</p></Link> 
              <Link to="classes"><p className='text-white text-base font-semibold custmenuhoveractive'>CLASSES</p></Link> 
              <Link to="timetable"><p className='text-white text-base font-semibold custmenuhoveractive'>TIMETABLE</p></Link> 
              <Link to="store"><p className='text-white text-base font-semibold custmenuhoveractive'>STORE</p></Link>
          </div>
          <div>
              <FeatherIcon className="text-white" size="40" icon="menu"/>
          </div>
    </div>
  )
}
