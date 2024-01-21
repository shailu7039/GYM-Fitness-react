import React from "react";
import { Input } from "@chakra-ui/react";
import { Globe } from "lucide-react";
const ProductCategory = () => {
  return (
    <div>
      <div className="flex gap-10 px-28 py-20">
        <div className="w-2/3">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <img src={require("../../../../assets/images/2.jpg")} alt="img" />
              <p className="text-center text-3xl text-primary font-bold pt-3">
                Accessories
              </p>
            </div>
            <div>
              <img
                src={require("../../../../assets/images/48.jpg")}
                alt="img"
              />
              <p className="text-center text-3xl text-primary font-bold pt-3">
                Man
              </p>
            </div>
            <div>
              <img
                src={require("../../../../assets/images/30.jpg")}
                alt="img"
              />
              <p className="text-center text-3xl text-primary font-bold pt-3">
                Woman
              </p>
            </div>
            <div>
              <img
                src={require("../../../../assets/images/24.jpg")}
                alt="img"
              />
              <p className="text-center text-3xl text-primary font-bold pt-3">
                Miscellaneous
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 ">
          <div className="rightsection">
            <h2 className="text-xl font-bold">MAIN MENU</h2>
            <p className="pt-8">HOME</p>
            <div className="pt-4">
              <p>BLOG</p>
              <div className="pl-7">
                <p className="pt-4">BLOG DEFAULT</p>
                <p className="pt-4">BLOG GRID</p>
                <p className="pt-4">BLOG LIST</p>
              </div>
            </div>
            <div className="pt-4">
              <p>PAGE</p>
              <div className="pl-7">
                <p className="pt-4">ABOUT US</p>
                <p className="pt-4">PRICEING</p>
                <p className="pt-4">FAQS</p>
              </div>
            </div>
            <div className="pt-4">
              <p>CLASSES</p>
              <div className="pl-7">
                <p className="pt-4">STRENGTH EXERCISES</p>
                <p className="pt-4">CARDIO TRAINING</p>
                <p className="pt-4">PERSONAL TRAINING</p>
                <p className="pt-4">BOXING WORKOUT</p>
                <p className="pt-4">FITNESS TRAINING</p>
                <p className="pt-4">YOGA FITNESS</p>
              </div>
            </div>
            <p className="pt-4">TIMETABLE</p>
            <div className="pt-4">
              <p>STORE</p>
              <div className="pl-7">
                <p className="pt-4">PRODUCTS LISTING</p>
              </div>
            </div>
          </div>
          <div className="rightsection mt-8">
            <h2 className="text-xl font-bold mb-7">RECENT POSTS</h2>

            <div className="px-10">
              <div>
                <img
                  src={require("../../../../assets/images/fit girl.jpg")}
                  alt=""
                />
                <div className="p-5">
                  <p className="mb-3 text-xl font-bold">
                    The Best Outer-Thigh Exercises and Cardio Workouts
                  </p>
                  <div className="flex gap-4">
                    <span>12 February 2022</span>
                    <span>Blog</span>
                  </div>
                </div>
                <hr />
              </div>
              <div className="pt-4">
                <img
                  src={require("../../../../assets/images/jonathan-borba.jpg")}
                  alt=""
                />
                <div className="p-5">
                  <p className="mb-3 text-xl font-bold">
                    The Best Outer-Thigh Exercises and Cardio Workouts
                  </p>
                  <div className="flex gap-4">
                    <span>12 February 2022</span>
                    <span>Blog</span>
                  </div>
                </div>
                <hr />
              </div>
              <div className="pt-4">
                <img
                  src={require("../../../../assets/images/humphrey-muleba.jpg")}
                  alt=""
                />
                <div className="p-5">
                  <p className="mb-3 text-xl font-bold">
                    The Best Outer-Thigh Exercises and Cardio Workouts
                  </p>
                  <div className="flex gap-4">
                    <span>12 February 2022</span>
                    <span>Blog</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="rightsection mt-8">
            <h2 className="text-2xl font-bold mb-7">LOGIN FORM</h2>
            <div>
              <Input
                className="w-full h-40px rounded-md pl-3 mb-6"
                placeholder="Username"
                size="md"
                type="input"
              />
              <Input
                className="w-full h-40px rounded-md pl-3 mb-2"
                placeholder="Password"
                size="md"
                type="input"
              />
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4" />
                <span className="pl-3 text-lg">Remember Me</span>
              </div>
            </div>
            <div className="pt-10">
              <button className="flex justify-center bg-f36 w-full py-3 text-black rounded-md">
                <span>
                  <Globe />
                </span>
                <span> Web Authentication</span>{" "}
              </button>
            </div>
            <div className="pt-5 mb-4">
              <button className=" bg-primary w-full py-3 text-black rounded-md">
                Log In{" "}
              </button>
            </div>
            <div>
              <p className="cudtborder text-primary">Forgot your password?</p>
              <p className="cudtborder text-primary mt-2">
                Forgot your username?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
