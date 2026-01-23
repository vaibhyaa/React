/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart } from "./cartSlice";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  // console.log(cart);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        to="/menu"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-6 text-2xl font-semibold">
        Your cart, <span className="text-blue-600">{username}</span>
      </h2>

      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty 🍕</p>
        ) : (
          <>
            <ul>
              {cart.map((eachItem) => {
                return <CartItem key={eachItem.pizzaId} item={eachItem} />;
              })}
            </ul>

            {/* ACTIONS */}
            <div className="mt-6 flex justify-between">
              <Link
                to="/order/new"
                className="rounded-lg bg-blue-600 px-5 py-2 text-sm text-white"
              >
                Order pizzas
              </Link>

              <Button
                onClick={() => dispatch(clearCart())}
                className="rounded-lg border border-red-500 px-5 py-2 text-sm text-red-500"
              >
                Clear cart
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
