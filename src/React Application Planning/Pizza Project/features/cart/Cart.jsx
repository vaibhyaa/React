/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];


function Cart() {
  const cart = fakeCart;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <Link
        to="/menu"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-red-500 hover:underline"
      >
        &larr; Back to menu
      </Link>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">
        Your cart, <span className="text-blue-600">%NAME%</span>
      </h2>

      {/* Cart content */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty 🍕
          </p>
        ) : (
          <>
            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Link
                to="/order/new"
                className="rounded-lg bg-blue-600 px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Order pizzas
              </Link>

              <button
                className="rounded-lg border border-red-500 px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;


