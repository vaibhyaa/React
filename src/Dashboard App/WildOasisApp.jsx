/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppyLayout from "./ui/AppyLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
      // now the data will always atomatically become stale
    },
  },
});

const WildOasisApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppyLayout />}>
              <Route index element={<Navigate replace to={"dashboard"} />} />

              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<NewUsers />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={20}
          containerStyle={{ margin: "12px" }}
          toastOptions={{
            success: {
              duration: 3000,
              iconTheme: {
                primary: "var(--color-green-600)",
                secondary: "var(--color-green-50)",
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: "var(--color-red-600)",
                secondary: "var(--color-red-50)",
              },
            },
            style: {
              fontSize: "1.4rem",
              fontWeight: 500,
              maxWidth: "42rem",
              padding: "1.4rem 1.8rem",
              borderRadius: "12px",
              background: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
};

export default WildOasisApp;
