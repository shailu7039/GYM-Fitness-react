import React from "react";
import { Check } from "lucide-react";
export default function ChoosePlan() {
  return (
    <div>
      <div className="bg-0c1600 py-28">
        <div className="pl-28">
          <h2 className="text-5xl font-bold">CHOOSE YOUR PLAN</h2>
          <p className="pt-8 w-750px">
            Gym fitness dedicated, for a training center or personal trainer,
            suitable to work with sport related websites such as crossfit,
            bodybuilding or yoga.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 px-28 pt-20">
          <div className="card1">
            <h2>
              <span className="text-primary text-6xl font-semibold">$69</span>
              /billed weekly
            </h2>
            <p className="pt-8">This plan is suitable for newbies</p>
            <h2 className="text-white font-bold text-4xl pt-8">Starter</h2>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="pt-10">
              <button className="bg-primary text-black py-3 px-8">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="card2">
            <h2 className="text-black">
              <span className="text-black text-6xl font-semibold">$69</span>
              /billed weekly
            </h2>
            <p className="pt-8 text-black">This plan is suitable for newbies</p>
            <h2 className="text-black font-bold text-4xl pt-8">Exterprise</h2>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-black" />
              <p className="text-lg text-black">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-black" />
              <p className="text-lg text-black">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-black" />
              <p className="text-lg text-black">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-black" />
              <p className="text-lg text-black">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-black" />
              <p className="text-lg text-black">Fitness Training</p>
            </div>
            <div className="pt-10">
              <button className="bg-2d2e2 text-white py-3 px-8">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="card1">
            <h2>
              <span className="text-primary text-6xl font-semibold">$199</span>
              /billed weekly
            </h2>
            <p className="pt-8">This plan is suitable for newbies</p>
            <h2 className="text-white font-bold text-4xl pt-8">Professional</h2>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="flex gap-3 items-center pt-5">
              <Check className="text-primary" />
              <p className="text-lg">Fitness Training</p>
            </div>
            <div className="pt-10">
              <button className="bg-primary text-black py-3 px-8">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
