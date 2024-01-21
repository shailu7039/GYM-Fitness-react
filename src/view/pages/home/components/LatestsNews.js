import React from "react";

export default function LatestsNews() {
  return (
    <div className="relative">
      <div class="parallax-2 "></div>
      <div className="absolute top-32">
        <h2 className="text-6xl font-bold px-28 text-white">LATEST NEWS</h2>
        <div className="grid grid-cols-3 gap-10 px-28 pt-20">
          <div className="">
            <img
              src={require("../../../../assets/images/fit girl.jpg")}
              alt=""
              className="h-300px object-cover"
            />
            <p className="text-xl font-bold pt-4 text-white">
              The Best Outer-Thigh Exercises and Cardio Workouts
            </p>
            <div className="flex pt-2">
              <span>12 February 2022 - </span>
              <span> Victoria Anderson</span>
            </div>
          </div>
          <div className="">
            <img
              src={require("../../../../assets/images/carl-barcelo.jpg")}
              alt=""
              className="h-300px object-cover"
            />
            <p className="text-white text-xl font-bold pt-4">
              Yoga Poses to Feel Ultra-Centered
            </p>
            <div className="flex pt-2">
              <span>12 February 2022 - </span>
              <span> Victoria Anderson</span>
            </div>
          </div>
          <div className="">
            <img
              src={require("../../../../assets/images/jonathan-borba.jpg")}
              alt=""
              className="h-300px object-cover"
            />
            <p className="text-white  text-xl font-bold pt-4">
              13 Benefits of Running That Make You Healthier
            </p>
            <div className="flex pt-2">
              <span>12 February 2022 - </span>
              <span> Victoria Anderson</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
