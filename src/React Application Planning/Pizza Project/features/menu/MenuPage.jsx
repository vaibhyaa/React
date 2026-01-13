import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const MenuPage = () => {
  const menu = useLoaderData();
  return (
<<<<<<< HEAD
    // <>
    //   <h1>First Add the cart and then select the quantity </h1>
    //   <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5">
    //     {menu.map((eachPizza) => (
    //       <Menu key={eachPizza.id} eachPizza={eachPizza} />
    //     ))}
    //   </ul>
    // </>
    <>
      {/* Header */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-linear-to-r from-yellow-50 to-yellow-100 px-6 py-4 shadow-sm my-5">
        <h1 className="text-lg font-semibold text-stone-800">
          🍕 Add pizzas to your cart
        </h1>
        <p className="mt-1 text-sm text-stone-600">
          First add the pizza which you line, then adjust the quantity as needed
        </p>
      </div>

      {/* Menu Grid */}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menu.map((eachPizza) => (
          <Menu key={eachPizza.id} eachPizza={eachPizza} />
        ))}
      </ul>
    </>
=======
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5">
      {menu.map((eachPizza) => (
        <Menu key={eachPizza.id} eachPizza={eachPizza} />
      ))}
    </ul>
>>>>>>> 083caa83c2dbed012168a074e5b7da3c23cf0015
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default MenuPage;
