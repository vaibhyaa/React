import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoaderUi from "./LoaderUi";

const AppLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  // we need to check when the state of navigation is loading
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <LoaderUi />}

      {/* Header & Footer stay fixed */}
      <Header />

      <main>
        {/* <h1>Content</h1> */}
        {/* /Child routes change inside <Outlet /> */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
