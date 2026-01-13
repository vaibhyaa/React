import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useLoaderData } from "react-router-dom";
import Menu from "./Menu";

const MenuPage = () => {
  const menu = useLoaderData();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5">
      {menu.map((eachPizza) => (
        <Menu key={eachPizza.id} eachPizza={eachPizza} />
      ))}
    </ul>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default MenuPage;
