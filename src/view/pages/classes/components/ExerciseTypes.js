import React from 'react'

const ExerciseTypes = () => {
  return (
    <div className='py-28 px-28'>
       <div className="grid grid-cols-3 gap-10">
        <div className="relative">
          <img
            src={require("../../../../assets/images/sushil-ghimire.jpg")}
            className=""
            alt=""
          />
          <div className="py-5">
            <p className="text-2xl text-white uppercase font-bold  ">
              Strength Exercises
                      </p>
                      <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
        <div className="">
          <img
            src={require("../../../../assets/images/jonathan-borba1.jpg")}
            alt=""
             className=""
          />
          <div className="py-5">
                      <p className="text-2xl text-white uppercase font-bold ">Cardio Fitness</p>
                     <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
        <div className="">
          {" "}
          <img
            src={require("../../../../assets/images/carl-barcelo1.jpg")}
            alt=""
             className=""
          />
          <div className="py-5">
                      <p className="text-2xl text-white font-bold uppercase  ">Personal Training</p>
                      <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
        <div className="">
          <img src={require("../../../../assets/images/thao-le.jpg")} alt=""  className="" />
          <div className="pt-5">
                      <p className="text-2xl text-white font-bold uppercase ">Boxing Workout</p>
                      <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
        <div className="">
          <img
            src={require("../../../../assets/images/valery-sysoev.jpg")}
            alt=""
             className=""
          />
          <div className="pt-5">
                      <p className="text-2xl text-white font-bold uppercase ">Fitness Training</p>
                      <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
        <div className="">
          <img
            src={require("../../../../assets/images/bruce-mars1.jpg")}
            alt=""
             className=""
          />
          <div className="pt-5 ">
                      <p className="text-2xl text-white font-bold uppercase ">Yoga Fitness</p>
                      <p className='pt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                      </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseTypes
