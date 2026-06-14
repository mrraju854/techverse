import React from "react";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price.replace(/[₹,]/g, "")),
    0,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">My Cart ({cart.length})</h1>

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-600 transition duration-300"
        >
          Clear Cart
        </button>
      )}

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Your cart is empty
          </h2>

          <p className="text-gray-500">Add some products to your cart.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-contain"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                <p className="text-blue-600 text-xl font-bold">{item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-10 bg-blue-50 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">
              Total: ₹{subtotal.toLocaleString()}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
