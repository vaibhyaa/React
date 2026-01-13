/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utilis/helpers";
<<<<<<< HEAD
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function CartItem({ item }) {
  console.log(item);

  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
      {/* LEFT: name & quantity */}
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-stone-800">{name}</p>
        <span className="text-xs text-stone-500">Quantity: {quantity}</span>
      </div>
=======
import { deleteItem } from "./cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function CartItem({ item }) {
  const dispatch = useDispatch();

  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm mx-1 my-2">
      {/* Left: item info */}
      <p className="text-sm font-medium text-gray-800">
        <span className="font-semibold">{quantity}×</span> {name}
      </p>
>>>>>>> 083caa83c2dbed012168a074e5b7da3c23cf0015

      {/* CENTER: price */}
      <div className="text-sm font-bold text-stone-900">
        {formatCurrency(totalPrice)}
      </div>

<<<<<<< HEAD
      {/* RIGHT: delete */}
      <div className="mt-3 flex items-center justify-between rounded-lg bg-stone-50 p-2">
        {/* <span className="text-sm font-medium text-stone-600">
          Quantity {quantity}
        </span> */}

        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-stone-800 transition hover:bg-yellow-300"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-stone-800 transition hover:bg-yellow-300"
          >
            +
          </button>
        </div>
      </div>

      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600 transition hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={() => dispatch(deleteItem(pizzaId))}
        aria-label="Delete item"
      >
        ✕
=======
      {/* <DeleteItem pizzaId={pizzaId} /> */}
 className="
    inline-flex items-center justify-center
    rounded-full
    bg-yellow-400
    px-4 py-2
    text-sm font-semibold uppercase tracking-wide
    text-stone-800
    transition-all duration-300
    hover:bg-yellow-300
    focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:bg-yellow-200
    disabled:text-stone-500
    disabled:hover:bg-yellow-200
  "      <button
       
        onClick={() => dispatch(deleteItem(pizzaId))}
      >
        Delete
>>>>>>> 083caa83c2dbed012168a074e5b7da3c23cf0015
      </button>
    </li>
  );
}

export default CartItem;
