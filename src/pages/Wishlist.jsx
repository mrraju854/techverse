import React from "react";
import ProductCard from "../components/ProductCard";

const Wishlist = ({ wishlist, addToCart, toggleWishlist }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">
        My Wishlist ({wishlist.length})
      </h1>

      {wishlist.length === 0 ? (
        <h2 className="text-2xl text-gray-500 text-center py-20">
          Your wishlist is empty ❤️
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              product={product}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
