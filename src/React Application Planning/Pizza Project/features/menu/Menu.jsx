/* eslint-disable react/prop-types */
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

  return (
    <li className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md">
      <img
        src={imageUrl}
        alt={name}
        className={`h-48 w-full object-cover ${
          soldOut ? "grayscale opacity-70" : ""
        }`}
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold text-stone-800">{name}</h3>

        <p className="mt-1 text-sm text-stone-500">{ingredients.join(", ")}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          {!soldOut ? (
            <p className="text-lg font-bold text-stone-700">
              ${unitPrice.toFixed(2)}
            </p>
          ) : (
            <p className="font-semibold text-red-500">Sold out</p>
          )}

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
        </div>
      </div>
    </li>
  );
}

export default Menu;
