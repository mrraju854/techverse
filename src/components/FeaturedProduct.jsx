import ProductCard from "./ProductCard";
import { products } from "../data/products";

const FeaturedProducts = ({ addToCart, wishlist, toggleWishlist }) => {
  return (
    <section className="py-20 bg-[#eff6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h1>
          <p className="text-gray-500 text-lg">
            Discover our most popular gadgets
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
