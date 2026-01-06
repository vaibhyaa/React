import { useLoaderData, useRouteError } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

/* eslint-disable react/react-in-jsx-scope */
function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  // const error = useRouteError();
  // console.log(error);

  // return <h1>Menu</h1>;
  return (
    <ul>
      {menu.map((eachPizza) => {
        return <MenuItem eachPizza={eachPizza} key={eachPizza.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
