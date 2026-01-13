import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/MenuPage";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { loader as orderLoader } from "./features/order/Order";
import { action as createOrderAction } from "./features/order/CreateOrder";
import MenuPage from "./features/menu/MenuPage";

// we declate routes in declarative way
// here we are doing in imperative way
// in react router version 6.4 if you want to use the new api , data loader , data acions , or data fetchers we need to create a new router using createBrowserRouter
// so specifying an array of objects were each object is now the route
// then we provide that router object here using the RouterProvider component
const router = createBrowserRouter([
  {
    // AppLayout is the parent layout. It will render for ALL routes
    element: <AppLayout />,
    // Child routes explained one by one
    // Header
    // <Matched Child Component>
    // Footer

    // whenever we put the wrong path url it gives this error
    errorElement: <Error />,

    children: [
      {
        // when we hot the route http://localhost:5173/ or http://localhost:5173
        // it shows header,Home(child route),Footer
        // 1️⃣ <Header />
        // 2️⃣ <Outlet /> → replaced by <Home />
        // 3️⃣ <Footer />
        path: "/",
        element: <Home />,
      },

      // http://localhost:5173/menu
      // URL → /menu
      // Shows restaurant menu / items
      // 1️⃣ <Header />
      // 2️⃣ <Outlet /> → replaced by <Menu />
      // 3️⃣ <Footer />
      {
        path: "/menu",
        element: <MenuPage />,
        // when use navigates to /menu router matches the route config
        // at this moment menu component is not rendered
        // Router executes the loader (BEFORE render)
        // -Router pauses rendering
        // -Calls menuLoader()
        // -Waits for the promise to resolve
        //  why:
        // No loading spinner needed
        // No useEffect
        // No race conditions
        // then Loader fetches data
        // if success Loader returns data to the router
        // then Router renders the component
        // useLoaderData() reads loader data
        loader: menuLoader,
        errorElement: <Error />,
      },

      // http://localhost:5173/cart
      // URL → /cart
      // cart state (Redux usually used here)
      // 1️⃣ <Header />
      // 2️⃣ <Outlet /> → replaced by <Cart />
      // 3️⃣ <Footer />
      {
        path: "/cart",
        element: <Cart />,
      },

      // http://localhost:5173/cart
      // URL → /order/new
      // Used to place a new order
      // Static route (no params)
      // 1️⃣ <Header />
      // 2️⃣ <Outlet /> → replaced by <CreateOrder />
      // 3️⃣ <Footer />
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      // URL examples: /order/123  , /order/abc456
      // orderId is a URL parameter
      // 1️⃣ <Header />
      // 2️⃣ <Outlet /> → replaced by <Order />
      // 3️⃣ <Footer />
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

const PizzaApp = () => {
  return <RouterProvider router={router} />;
};

export default PizzaApp;

// /menu hit
//    ↓
// Route matched
//    ↓
// menuLoader() runs
//    ↓
// getMenu() fetches data
//    ↓
// loader returns menu
//    ↓
// Menu component renders
//    ↓
// useLoaderData() receives menu
