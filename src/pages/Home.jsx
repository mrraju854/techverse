import React from "react";
import heroImage from "../assets/laptop-hero-image.jpg";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProduct";
import { Link } from "react-router-dom";

const Home = ({ addToCart, wishlist, toggleWishlist }) => {
  return (
    <>
      {" "}
      <div className="h-[89vh] w-full relative">
        <img
          className="h-full w-full object-cover"
          src={heroImage}
          alt="Laptop"
        />
        <div className="absolute top-6/13 -translate-y-1/2 left-5 sm:left-10 md:left-20 px-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-3">
            Top Selling Laptops
          </h1>

          <h2 className="text-blue-600 text-xl sm:text-3xl md:text-4xl font-semibold mb-2">
            Starting at Rs 46,450
          </h2>

          <h3 className="text-black text-sm sm:text-lg md:text-xl mb-6">
            *Inclusive of all Offers
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link
              to="/products"
              className="bg-blue-600 text-white text-base sm:text-lg md:text-xl px-5 py-2 font-semibold rounded-lg hover:text-blue-600 hover:bg-white transition duration-300 active:scale-95 text-center"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border font-semibold text-base sm:text-lg md:text-xl border-blue-600 bg-white text-blue-600 px-5 py-2 rounded-lg hover:text-white hover:bg-blue-600 transition duration-300 active:scale-95 text-center"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
      <Categories />
      <FeaturedProducts
        addToCart={addToCart}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </>
  );
};

export default Home;
