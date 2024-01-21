import React from "react";

export default function Fitnesspower() {
  return (
    <div className="flex items-center gap-10 px-28 mb-28">
      <div className="w-1/2">
              <img
                  className="h-700px object-cover"
          src={require("../../../../assets/images/humphrey-muleba.jpg")}
          alt=""
        />
      </div>
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
    </div>
  );
}
