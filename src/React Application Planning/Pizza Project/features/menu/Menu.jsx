/* eslint-disable react/prop-types */
import { useLoaderData, useRouteError } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

/* eslint-disable react/react-in-jsx-scope */
function Menu({ eachPizza }) {
  const { name, unitPrice, ingredients, imageUrl, soldOut } = eachPizza;

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

          <button
            disabled={soldOut}
            className="rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-stone-800 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
