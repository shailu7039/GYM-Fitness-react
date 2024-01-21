import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Member() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <div class="parallax-1">
        
        <div className="grid grid-cols-4 pt-32 px-28">
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
    </div>
  );
}
