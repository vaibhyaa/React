/* eslint-disable no-undef */
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PageNav from "./WorldWiseAppComponents/PageNav";
import "./index.css";
// import Homepage from "./WorldWiseAppPages/ProjectPages/Homepage";
// import Product from "./WorldWiseAppPages/ProjectPages/Product";
// import PageNotFound from "./WorldWiseAppPages/ProjectPages/PageNotFound";
// import Pricing from "./WorldWiseAppPages/ProjectPages/Pricing";
// import Login from "./WorldWiseAppPages/ProjectPages/Login";
// import AppLayout from "./WorldWiseAppPages/ProjectPages/AppLayout";

// dist/assets/index-D8_P2Qz1.css   51.24 kB │ gzip:  12.53 kB
// dist/assets/index-CCTTfe9E.js   573.92 kB │ gzip: 168.37 kB

const Homepage = lazy(() =>
  import("./WorldWiseAppPages/ProjectPages/Homepage")
);

const Product = lazy(() => import("./WorldWiseAppPages/ProjectPages/Product"));
const PageNotFound = lazy(() =>
  import("./WorldWiseAppPages/ProjectPages/PageNotFound")
);
const Pricing = lazy(() => import("./WorldWiseAppPages/ProjectPages/Pricing"));
const Login = lazy(() => import("./WorldWiseAppPages/ProjectPages/Login"));
const AppLayout = lazy(() =>
  import("./WorldWiseAppPages/ProjectPages/AppLayout")
);

import CityList from "./WorldWiseAppComponents/CityList";
import CountryList from "./WorldWiseAppComponents/CountryList";
import City from "./WorldWiseAppComponents/City";
import Form from "./WorldWiseAppComponents/Form";
import { CitiesProvider } from "./Context/CitiesContext_useReducer";
import { AuthProvider } from "./Context/FakeAuthContext";
import ProtectedRoute from "./WorldWiseAppPages/ProjectPages/ProtectedRoute";
import SpinnerFullPage from "./WorldWiseAppComponents/SpinnerFullPage";

const WorldWiseApp = () => {
  return (
    <>
      {/* this part always stay in page like header, title
        <h1>Hello Router!</h1> */}
      {/* we cannot really transition from them without page reload all we are doing is manually changing the url then application goes to that page  */}
      <AuthProvider>
        <CitiesProvider>
          <BrowserRouter>
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                {/* Public routes */}
                {/* <Route path="app" element={<AppLayout />} /> */}
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="login" element={<Login />} />

                {/* Protected / nested routes */}
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  {/* <Route
              index
              element={<CityList cities={cities} loading={loading} />}
              /> */}
                  {/* Default route (index route) */}
                  {/* This means when you go to /app, it automatically redirects to /app/cities */}
                  <Route index element={<Navigate to="cities" replace />} />
                  {/* The first line 👉 redirects /app → /app/cities
                main is The second line 👉 renders <CityList /> at /app/cities */}
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:cityid" element={<City />} />
                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CitiesProvider>
      </AuthProvider>
    </>
  );
};

export default WorldWiseApp;
