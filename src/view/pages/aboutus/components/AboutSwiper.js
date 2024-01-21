import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const AboutSwiper = () => {
  return (
      <div className="pt-28 px-28">
        
      <Swiper
        className="custswiper"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
          >
           
        <SwiperSlide>
          {" "}
          <div className="flex items-center  gap-10  mb-28">
            <div className="w-1/2 px-5">
              <h2 className="text-5xl text-white font-bold">
                Melissa Schailker
              </h2>
              <p className="pt-4">Gymer in Australia</p>
              <p className="pt-8 text-2xl lineheight">
                Trained here for 2nd year in a row. The location is great, not
                on the main road like most other gyms in the area so you don’t
                get bothered by traffic. Surrounded by nature and mountain views
                makes for a pleasant training environment. Especially for the
                running. The gym also has a quite large boot camp area which I
                enjoyed training on. The coaches I found to be very professional
                and knowledgeable. Learned plenty of new stuff. Will definitely
                go back.
              </p>

              <div className="pt-10">
                <button className="bg-primary text-black py-3 px-8">
                  MORE ABOUT US
                </button>
              </div>
            </div>
            <div className="w-1/2 relative">
              <div className="p-10">
                <img
                  className=" object-cover custboxshadow"
                  src={require("../../../../assets/images/spencer-davis.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center  gap-10  mb-28">
            <div className="w-1/2 px-5">
              <h2 className="text-5xl text-white font-bold">Miguel Jonson</h2>
              <p className="pt-4">Fitness Coach in Sweden</p>
              <p className="pt-8 text-2xl lineheight">
                Wow, I really recommend this place for you if you want to have
                some fun while you do your workout! They have an amazing staff
                that are super serious and makes you reach your goals with a
                smile on their faces!! Thank you Titan Fitness, I will come back
                as soon as possible!!
              </p>
              
              <div className="pt-10">
                <button className="bg-primary text-black py-3 px-8">
                  MORE ABOUT US
                </button>
              </div>
            </div>
            <div className="w-1/2 relative">
              <div className="p-10">
                <img
                  className=" object-cover custboxshadow"
                  src={require("../../../../assets/images/hayley-kim.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutSwiper;
