import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({
  id,
  image,
  title,
  price,
  product,
  addToCart,
  wishlist,
  toggleWishlist,
}) => {
  const isWishlisted = wishlist?.some((item) => item.id === id);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadowxl hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-blue-200">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-52 object-cover" />
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 text-[28px]"
        >
          <FaHeart
            className={
              isWishlisted
                ? "text-red-500"
                : "text-gray-100 hover:text-red-500 cursor-pointer active:scale-95 hover:text-  [30px] transition duration-300"
            }
          />
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-blue-600 font-bold text-lg mb-5">{price}</p>
        <div className="flex gap-3">
          <Link
            to={`/products/${id}`}
            className="flex-1 text-center border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-500 text-white cursor-pointer py-2 rounded-lg font-medium hover:bg-blue-100 transition hover:text-blue-600 hover:border border-blue-300 duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
