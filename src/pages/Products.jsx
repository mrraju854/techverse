import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductSkeleton from "../components/ProductSkeleton";

const Products = ({ search, addToCart, wishlist, toggleWishlist }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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

      {!loading && filteredProducts.length === 0 && (
        <h2 className="text-3xl text-center text-gray-500 py-20">
          No Products Found
        </h2>
      )}
    </>
  );
};

export default Products;
