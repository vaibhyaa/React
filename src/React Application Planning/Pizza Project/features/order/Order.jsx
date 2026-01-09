/* eslint-disable react/react-in-jsx-scope */
// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilis/helpers";

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      {/* Status */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-stone-800">
          Order #{id} status
        </h2>

        <div className="flex items-center gap-3">
          {priority && (
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase text-red-700">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase text-green-700">
            {status} order
          </span>
        </div>
      </div>

      {/* Delivery */}
      <div className="rounded-xl bg-stone-100 p-4 text-sm sm:p-6">
        <p className="mb-2 font-medium text-stone-700">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      {/* Price */}
      <div className="space-y-2 rounded-xl bg-stone-50 p-4 text-sm sm:p-6">
        <p className="flex justify-between text-stone-600">
          <span>Price pizza</span>
          <span className="font-medium">{formatCurrency(orderPrice)}</span>
        </p>

        {priority && (
          <p className="flex justify-between text-stone-600">
            <span>Price priority</span>
            <span className="font-medium">{formatCurrency(priorityPrice)}</span>
          </p>
        )}

        <div className="border-t border-stone-200 pt-3 font-semibold text-stone-800">
          <p className="flex justify-between">
            <span>To pay on delivery</span>
            <span>{formatCurrency(orderPrice + priorityPrice)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // so params is { orderId:"1234" }
  // user navigates :- /order/ABC987 :- path: "/order/:orderId"
  // Router matches the route
  // React Router: Sees :orderId
  // Captures that segment
  console.log(params);

  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
