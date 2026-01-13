/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  addItem,
  decreaseItemQuantity,
  getCartItemById,
  increaseItemQuantity,
} from "../cart/cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function Menu({ eachPizza }) {
  console.log(eachPizza);
  const { pizzaId, name, unitPrice, ingredients, imageUrl, soldOut } =
    eachPizza;
  const cartItem = useSelector(getCartItemById(pizzaId));
  const quantity = cartItem?.quantity ?? 0;

  const dispatch = useDispatch();
=======
import { useLoaderData, useRouteError } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

/* eslint-disable react/react-in-jsx-scope */
function Menu({ eachPizza }) {
  const dispatch = useDispatch();
  // console.log(eachPizza);
  const { id, name, unitPrice, ingredients, imageUrl, soldOut } = eachPizza;
>>>>>>> 083caa83c2dbed012168a074e5b7da3c23cf0015

  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className={`h-48 w-full object-cover transition ${
            soldOut ? "grayscale opacity-70" : "group-hover:scale-105"
          }`}
        />

        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            Sold out
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-stone-800">{name}</h3>

        <p className="mt-1 text-sm text-stone-500 line-clamp-2">
          {ingredients.join(", ")}
        </p>

        {/* FOOTER */}
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            {!soldOut ? (
              <p className="text-lg font-bold text-stone-700">
                ${unitPrice.toFixed(2)}
              </p>
            ) : (
              <p className="font-semibold text-red-500">Sold out</p>
            )}

            {!soldOut && (
              <Button
                onClick={() => {
                  const newItem = {
                    pizzaId: pizzaId,
                    name,
                    quantity: 1,
                    unitPrice,
                    totalPrice: unitPrice * 1,
                  };
                  dispatch(addItem(newItem));
                }}
              >
                Add
              </Button>
            )}
          </div>

          {/* QUANTITY CONTROLS */}
          {!soldOut && (
            <div className="mt-3 flex items-center justify-between rounded-lg bg-stone-50 p-4">
              <span className="pr-3.5 text-sm font-medium text-stone-600">
                Quantity {quantity}
              </span>

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
          )}
<<<<<<< HEAD
=======

          {/* <button
            disabled={soldOut}
            className="rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-800 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            Add to cart
          </button> */}
          {/* <button
          onClick={()=>}
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
  "
          >
            Delete
          </button> */}
          <Button
            disabled={soldOut}
            onClick={() => {
              // console.log(id);
              const newItem = {
                pizzaId: id,
                name,
                quantity: 1,
                unitPrice,
                totalPrice: unitPrice * 1,
              };
              dispatch(addItem(newItem));
            }}
          >
            Add to cart
          </Button>
>>>>>>> 083caa83c2dbed012168a074e5b7da3c23cf0015
        </div>
      </div>
    </li>
  );
}

export default Menu;
