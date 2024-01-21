import React from "react";
import { Input,InputGroup,InputLeftAddon,InputRightAddon } from '@chakra-ui/react'
import {
  Instagram,
  Youtube,
  Twitter,
  Facebook,
} from "feather-icons-react/build/IconComponents";
export default function Footer() {
  return (
    <div className="px-28 bg-0c1600">
      <div className=" flex justify-center py-20">
              <div className="w-600px">
                
                  <h2 className="text-6xl font-semibold text-center">GET THE LATEST NEWS FROM <span className="text-primary">POWFIT</span></h2>
             <InputGroup className="h-60px mt-10">
   
    <Input placeholder='Email' className="w-full pl-4 bg-2d2e2" />
    <button className="bg-primary text-black px-8">
      SUBSCRIBE
    </button>
  </InputGroup>
              </div>
          </div>
      <hr />
      <div className="flex gap-5 py-20">
        <div className="w-2/5">
          <img
            src="https://powfit.jollyany.co/images/tz_powfit/Logo-POWFIT.svg"
            alt=""
            className="w-60 mb-7"
          />
          <p>
            Gym fitness dedicated, for a training center or personal trainer,
            suitable to work with sport related websites such as crossfit,
            bodybuilding or yoga
          </p>
          <div className="flex gap-10 pt-8">
            <Twitter />
            <Facebook />
            <Youtube />
            <Instagram />
          </div>
        </div>
        <div className="w-3/5">
          <div className="grid grid-cols-3 gap-5">
            <div>
              <h2 className="text-xl font-bold mb-4">COMPANY</h2>
              <div>
                <p className="mb-3">About Us</p>
                <p className="mb-3">Join POWFIT</p>
                <p className="mb-3">Pricing Plans</p>
                <p className="mb-3">Our Trainers</p>
                <p className="mb-3">News</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">PROGRAMS</h2>
              <div>
                <p className="mb-3">Personal Trainer</p>
                <p className="mb-3">Group Practice Class </p>
                <p className="mb-3">Training Package</p>
              </div>
            </div>
            <div >
              <h2 className="text-xl font-bold mb-4">
                73 Edgar Buildings, George St, London, England
              </h2>
              <div>
                <p className="mb-3">info@powfit.com</p>
                <p className="mb-3">+88 123 456 789 </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
