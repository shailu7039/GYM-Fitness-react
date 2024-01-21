import React from 'react'
import TimeBanner from './components/TimeBanner'
import DayTime from './components/DayTime'

const TimeTable = () => {
  return (
    <div className='pt-24'>
          <TimeBanner />
          <DayTime/>
    </div>
  )
}

export default TimeTable
