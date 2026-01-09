import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoaderUi from "./LoaderUi";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);

  // we need to check when the state of navigation is loading
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      {isLoading && <LoaderUi />}

      {/* Header & Footer stay fixed */}
      <Header />

      <div className="overflow-scroll bg-stone-200">
        <main className=" max-w-3xl mx-auto ">
          {/* <h1>Content</h1> */}
          {/* /Child routes cha nge inside <Outlet /> */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
