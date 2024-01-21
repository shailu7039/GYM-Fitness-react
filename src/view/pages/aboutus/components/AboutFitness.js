import { useState } from "react";
import React from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const AboutFitness = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <div className='py-28'>
      <div className="flex  gap-10 px-28 mb-28">
     
      <div className="w-1/2 px-5">
        <h2 className="text-5xl font-bold">
          INTRODUCING <span className="text-primary">POWFIT</span>, A FITNESS
          CENTER
        </h2>
        <p className="pt-8">
          Gym fitness dedicated, for a training center or personal trainer,
          suitable to work with sport related websites such as crossfit,
          bodybuilding or yoga.
        </p>
        <p className="pt-8">
          Its ultimate aim is to help individuals and businesses in the coaching
          industry promote their speeches, services, and consultancies to the
          world easier.
        </p>
        <div className="pl-4">
          <p className="pt-6">- Do you want to help people and inspire others?</p>
          <p className="pt-4">
            - Are you an Entrepreneur, a Public speaker, a Mentor, a Fitness
            trainer, a doctor, a health coach, a physical therapist, a
            nutritionist, a personal trainer, a facilitator, a dietician or a
            professional consultant agency?
          </p>
          <p className="pt-4">
            - Do you need an outstanding website displaying your portfolio for
            your services and sharing your thoughts, your upcoming events or
            your courses?
          </p>

          <p className="pt-4">
            <span className="text-primary">-</span>You want something that is
            easy to use, easy to install and doesn’t take much of your time?
          </p>
              </div>
              <div className="pt-10">
                  <button className="bg-primary text-black py-3 px-8">MORE ABOUT US</button>
              </div>
              </div>
               <div className="w-1/2 relative">
                 
                       <img
                  className=" object-cover pl-36"
          src={require("../../../../assets/images/spencer-davis.jpg")}
          alt=""
                      />
                      <div className='absolute top-96 right-24'>
                          <img
                  className=" object-cover pl-16"
          src={require("../../../../assets/images/sven-mieke.jpg")}
          alt=""
                      />  
                     
             </div>
      </div>
          </div>
           <div className="grid grid-cols-4 pt-20 px-28">
          <div>
            <div className="flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp
                    className="text-6xl font-bold"
                    start={0}
                    end={99}
                    duration={4}
                    delay={0}
                  />
                )}
              </ScrollTrigger>
              <p className="text-6xl font-bold">%</p>
            </div>
            <span className="text-xl">Satisfied Clients</span>
          </div>
          <div>
            <div className="flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp
                    className="text-6xl font-bold"
                    start={0}
                    end={88}
                    duration={4}
                    delay={0}
                  />
                )}
              </ScrollTrigger>
              {/* <p className="text-6xl font-bold">%</p> */}
            </div>
            <span className="text-xl">Expert Trainers</span>
          </div>
          <div>
            <div className="flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp
                    className="text-6xl font-bold"
                    start={0}
                    end={32}
                    duration={4}
                    delay={0}
                  />
                )}
              </ScrollTrigger>
              {/* <p className="text-6xl font-bold">%</p> */}
            </div>
            <span className="text-xl">Global Awards</span>
          </div>
          <div>
             <div className="flex">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <CountUp
                    className="text-6xl font-bold"
                    start={0}
                    end={5869}
                    duration={4}
                    delay={0}
                  />
                )}
              </ScrollTrigger>
              {/* <p className="text-6xl font-bold">%</p> */}
            </div>
            <span className="text-xl">Happy Members</span>
          </div>
        </div>
    </div>
  )
}

export default AboutFitness
