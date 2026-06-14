import React from "react";
import laptopImg from "../assets/laptop.avif";
import phoneImg from "../assets/phone.avif";
import headphoneImg from "../assets/headphone.avif";
import watchImg from "../assets/watch.avif";

const Categories = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop By Category
          </h1>

          <p className="text-base md:text-xl text-gray-500">
            Explore our top technology categories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
              src={laptopImg}
              alt="Laptop"
              className="w-full h-48 rounded-2xl object-cover mb-5"
            />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
              Laptops
            </h2>

            <p className="text-gray-500 text-center">
              Powerful laptops for work, study and gaming.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
              src={phoneImg}
              alt="Phone"
              className="w-full h-48 rounded-2xl object-cover mb-5"
            />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
              Smartphones
            </h2>

            <p className="text-gray-500 text-center">
              Latest smartphones with advanced features.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
              src={headphoneImg}
              alt="Headphones"
              className="w-full h-48 rounded-2xl object-cover mb-5"
            />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
              Headphones
            </h2>

            <p className="text-gray-500 text-center">
              Premium sound for music and entertainment.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition duration-300 cursor-pointer">
            <img
              src={watchImg}
              alt="Smart Watch"
              className="w-full h-48 rounded-2xl object-cover mb-5"
            />

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
              Smart Watches
            </h2>

            <p className="text-gray-500 text-center">
              Stay connected and track your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
