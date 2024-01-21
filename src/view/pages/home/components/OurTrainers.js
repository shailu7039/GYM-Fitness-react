import { Facebook, Linkedin, Twitter, Youtube } from "feather-icons-react/build/IconComponents";
import React from "react";

export default function OurTrainers() {
  return (
    <div>
      <div className="py-28">
        <div className="pl-28">
          <h2 className="text-5xl font-bold">OUR TRAINERS</h2>
          <p className="pt-8 w-750px">
            Its ultimate aim is to help individuals and businesses in the
            coaching industry promote their speeches, services, and
            consultancies to the world easier.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 px-28 pt-20">
          <div className="">
                      <img src={require("../../../../assets/images/aaron-brogden.jpg")} alt="" />
                      <p className="text-center text-xl font-semibold pt-4">CORMAC MACALENAN</p>
                      <p className="text-center text-lg pt-1">Fitness Coach</p>
                      <div className="flex gap-3 pt-3 justify-center">
                          <Facebook className="w-4 h-4"/>
                          <Twitter className="w-4 h-4"/>
                          <Youtube className="w-4 h-4"/>
                          <Linkedin className="w-4 h-4"/>
                      </div>
                      </div>
          <div className="">
                      <img src={require("../../../../assets/images/anastase-maragos.jpg")} alt="" />
                      <p className="text-center text-xl font-semibold pt-4">MELISSA SCHAILKER</p>
                      <p className="text-center text-lg pt-1">Kick Boxing Coach</p>
                      <div className="flex gap-3 pt-3 justify-center">
                          <Facebook className="w-4 h-4"/>
                          <Twitter className="w-4 h-4"/>
                          <Youtube className="w-4 h-4"/>
                          <Linkedin className="w-4 h-4"/>
                      </div>
                          
          </div>
          <div className="">
                      <img src={require("../../../../assets/images/julia-rekamie.jpg")} alt="" />
                      <p className="text-center text-xl font-semibold pt-4">FABRONIA SHABOU</p>
                      <p className="text-center text-lg pt-1">Yoga Master</p>
                      <div className="flex gap-3 pt-3 justify-center">
                          <Facebook className="w-4 h-4"/>
                          <Twitter className="w-4 h-4"/>
                          <Youtube className="w-4 h-4"/>
                          <Linkedin className="w-4 h-4"/>
                      </div>
                      </div>
                      <div>
                      <img src={require("../../../../assets/images/vadim-paripa.jpg")} alt="" />
                      <p className="text-center text-xl font-semibold pt-4">ANDREAS STENBERG</p>
                      <p className="text-center text-lg pt-1">Fitness Coach</p>
                      <div className="flex gap-3 pt-3 justify-center">
                          <Facebook className="w-4 h-4"/>
                          <Twitter className="w-4 h-4"/>
                          <Youtube className="w-4 h-4"/>
                          <Linkedin className="w-4 h-4"/>
                      </div>
                      </div>
                      
        </div>
      </div>
    </div>
  );
}
