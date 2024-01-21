import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Banner() {
  return (
    <div>
          <Swiper
              className="custhieghtswiper relative"
        // install Swiper modules
        modules={[Navigation ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full filterbright custhimgbanner object-cover"
              src={require("../../../../assets/images/sven-mieke.jpg")}
              alt=""
            />
            <div className="absolute top-80 w-750px left-16">
              <h2 className="uppercase text-6xl font-bold">
                Start <span className="text-primary">Your Fitness Journey</span>{" "}
                Today
              </h2>
              <p className="pt-8">
                Gym fitness dedicated, for a training center or personal
                trainer, suitable to work with sport related websites such as
                crossfit, bodybuilding or yoga
              </p>
              <div className="pt-10">
                <button className="bg-white text-grey py-3 px-8">LERAN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative">
            <img
              className="w-full filterbright custhimgbanner object-cover"
              src={require("../../../../assets/images/bruce-mars.jpg")}
              alt=""
            />
            <div className="absolute top-80 w-750px left-16">
              <h2 className="uppercase text-6xl font-bold">
                The HIIT <span className="text-primary">Workout for Epic</span>{" "}
                Strength
              </h2>
              <p className="pt-8">
                Swearing an oath and signing in blood to cut all sugar, train
                six days per week, and get eight hours of sleep per night
                starting in January is a pretty noble move.
              </p>
              <div className="pt-10">
                <button className="bg-white text-grey py-3 px-8">LERAN MORE</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

          </Swiper>
          <div className="h-340px">
              <div className="grid grid-cols-3 gap-10 px-28 absolute top-800px z-10">
                  <div className="relative">
                      <img className="h-340px object-cover filterbright" src={require("../../../../assets/images/jonathan-borba.jpg")} alt="" />
                      <p className="absolute text-center bottom-20 text-4xl font-bold left-24">TIMETABLE</p>
              </div>
               <div className="relative">
                  <img className="h-340px object-cover filterbright" src={require("../../../../assets/images/sule-makaroglu.jpg")} alt="" />
             <p className="absolute text-center bottom-20 text-4xl font-bold left-24">CLASSES</p>
                  </div>
               <div className="relative">
                  <img className="h-340px object-cover filterbright" src={require("../../../../assets/images/bruce-mars1.jpg")} alt="" />
             <p className="absolute text-center bottom-20 text-4xl font-bold left-24">JOIN US</p>
                  </div>
              </div>
          </div>
    </div>
  );
}
