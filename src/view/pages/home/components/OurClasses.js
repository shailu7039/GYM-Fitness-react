import React from "react";

export default function OurClasses() {
  return (
    <div>
      <div className="bg-0c1600 py-28">
        <div className="pl-28">
          <h2 className="text-5xl font-bold">OUR CLASSES</h2>
          <p className="pt-8 w-750px">
            Its ultimate aim is to help individuals and businesses in the
            coaching industry promote their speeches, services, and
            consultancies to the world easier.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="relative">
          <img
            src={require("../../../../assets/images/sushil-ghimire.jpg")}
            className="custopacity"
            alt=""
          />
          <div className="absolute bottom-36 px-20">
            <p className="text-4xl font-bold text-center ">
              Strength Exercises
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={require("../../../../assets/images/jonathan-borba1.jpg")}
            alt=""
             className="custopacity"
          />
          <div className="absolute bottom-36 px-20">
            <p className="text-4xl font-bold text-center ">Cardio Fitness</p>
          </div>
        </div>
        <div className="relative">
          {" "}
          <img
            src={require("../../../../assets/images/carl-barcelo1.jpg")}
            alt=""
             className="custopacity"
          />
          <div className="absolute bottom-36 px-12">
            <p className="text-4xl font-bold text-center ">Personal Training</p>
          </div>
        </div>
        <div className="relative">
          <img src={require("../../../../assets/images/thao-le.jpg")} alt=""  className="custopacity" />
          <div className="absolute bottom-36 px-12">
            <p className="text-4xl font-bold text-center ">Boxing Workout</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={require("../../../../assets/images/valery-sysoev.jpg")}
            alt=""
             className="custopacity"
          />
          <div className="absolute bottom-36 px-16">
            <p className="text-4xl font-bold text-center ">Fitness Training</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={require("../../../../assets/images/bruce-mars1.jpg")}
            alt=""
             className="custopacity"
          />
          <div className="absolute bottom-36 px-24">
            <p className="text-4xl font-bold text-center ">Yoga Fitness</p>
          </div>
        </div>
      </div>
    </div>
  );
}
