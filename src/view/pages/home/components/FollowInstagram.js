import { Instagram } from "feather-icons-react/build/IconComponents";
import React from "react";

export default function FollowInstagram() {
  return (
    <div>
      <div className="flex justify-center items-center gap-3 py-8 bg-primary">
        <Instagram className="text-black w-5 h-5" />
        <p className="uppercase text-black text-base">Follow us on Instagram</p>
      </div>
      <div className="grid grid-cols-6">
        <div class="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/jonathan-borba1.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Jonathan</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/sule-makaroglu.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Sule</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/sven-mieke.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Sven Mieke</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/jonathan-borba.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Borba</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/valery-sysoev.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Valery</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="custhoverimage relative">
          <img
            src={require("../../.../../../../assets/images/bruce-mars.jpg")}
            alt=""
            className="followimage"
          />
          <div class="middle">
            <div class="">
              <p className="text-white font-bold text-4xl">Bruce Mars</p>
              <div className="pt-4">
                <button className=" border py-2 px-3">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
          </div>
          
    </div>
  );
}
