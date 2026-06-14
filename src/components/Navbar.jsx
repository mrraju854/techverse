import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch, cart, wishlist }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim().length > 0) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-blue-50 shadow-lg">
      <div className="hidden md:flex max-w-7xl mx-auto px-6 lg:px-10 h-20 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ⚡ TechVerse
        </Link>

        <div className="flex items-center gap-16">
          <Link
            to="/"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center border border-gray-400 rounded-full px-5 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search gadgets..."
              className="outline-none text-black w-80"
            />
          </div>

          <Link
            to="/wishlist"
            className="relative text-gray-700 hover:text-red-500 transition"
          >
            <FaHeart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative text-gray-700 hover:text-blue-600 transition"
          >
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-400 cursor-pointer transition duration-300 active:scale-95">
            Login
          </button>
        </div>
      </div>

      <div className="md:hidden px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">
            ⚡ TechVerse
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex-1 flex items-center border border-gray-300 rounded-full px-4 py-2">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search products..."
              className="w-full outline-none text-sm"
            />
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl text-gray-700"
          >
            {showMenu ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="px-4 py-4 border-b hover:bg-blue-50 hover:text-blue-600 flex justify-center transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setShowMenu(false)}
              className="px-4 py-4 border-b hover:bg-blue-50 hover:text-blue-600 flex justify-center transition"
            >
              Products
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setShowMenu(false)}
              className="px-4 py-4 border-b flex justify-center hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Wishlist ({wishlist.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setShowMenu(false)}
              className="px-4 py-4 border-b flex    justify-center hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Cart ({cart.length})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
