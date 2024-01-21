import React from 'react'

const TimeBanner = () => {
  return (
    <div>
       <img src={require("../../../../assets/images/blogbanner.jpg")} alt="" className='relative'/>
      <div className='absolute top-52 left-45per'>
        <h2 className='text-white font-bold text-7xl text-center'>Timetable</h2>
        <p className=' text-center pt-5'>You are here:&nbsp; &nbsp; /  &nbsp; &nbsp;   Home  &nbsp; &nbsp;/   &nbsp; &nbsp;  Timetable</p>
      </div>
    </div>
  )
}

export default TimeBanner
