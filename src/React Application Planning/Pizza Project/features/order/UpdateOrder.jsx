import React from "react";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
  return (
    <>
      <fetcher.Form method="PATCH">
        <button
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
          type="primary"
        >
          Make priority
        </button>
      </fetcher.Form>
    </>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  console.log("rendered");

  const data = { priority: true };
  const res=await updateOrder(params.orderId, data);
  // console.log("update");
  return null;
}
