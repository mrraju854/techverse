import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-7xl sm:text-8xl font-bold text-blue-500">404</h1>

          <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-gray-800">
            Product Not Found
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Oops! The product you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold transition duration-300 hover:bg-blue-200 hover:border-1 border-blue-400 hover:text-blue-600 hover:font-bold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-blue-100 min-h-[89vh] py-1 px-1">
      <div className="max-w-[1500px] mx-auto bg-blue-50 rounded-xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 p-8 md:p-12">
          <div className="flex items-center justify-center h-[450px] lg:h-[550px]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain rounded-lg hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600 text-lg">(4.8) | 128 Reviews</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-600">
                {product.price}
              </h2>

              <span className="text-xl text-gray-400 line-through">
                ₹1,09,999
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                Save ₹10,000
              </span>
            </div>

            <p className="text-gray-600 text-lg leading-8 mb-5">
              {product.description}
            </p>

            <div className="space-y-2 mb-10">
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700 text-lg">M4 Chip</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700 text-lg">16GB RAM</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700 text-lg">512GB SSD</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-gray-700 text-lg">Retina Display</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-100 cursor-pointer hover:text-blue-500 transition duration-300 active:scale-95"
              >
                Add To Cart
              </button>

              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white cursor-pointer transition duration-300 active:scale-95">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 px-6 pb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          You May Also Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter((item) => item.id !== Number(id))
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
