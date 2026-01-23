/* eslint-disable react/react-in-jsx-scope */
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
// import Cart from "../cart/Cart";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCrtPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch } from "react-redux";
import store from "../../Store.jsx";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utilis/helpers.js";
import { fetchAddress } from "../user/userSlice.js";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  // const cart = fakeCart;
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error,
  } = useSelector((state) => state.user);
  // useSelector is a hook that lets a React component READ data from the Redux store.


  const isLoadingAddress = addressStatus === "loading";
  const [withPriority, setwithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const totalCartPrice = useSelector(getTotalCrtPrice);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const [name, setName] = useState(userName || "");
  const [isEditing, setIsEditing] = useState(false);
  // Event handler runs top → bottom
  // setState = request update, not immediate change
  // React re-renders once after the handler finishes

  //  getCart is a selector function
  // useSelector expects a function not a return value if we call the function immediately the useSelector receive the value not function so pass function reference in useSelector
  // React-Redux will call it like this internally:
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold text-stone-800">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-stone-600">
            First Name
          </label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all placeholder:text-stone-400
         focus:outline-none focus:ring focus:ring-yellow-200 
         bg-white shadow-sm md:px-6 md:py-3"
            type="text"
            name="customer"
            required
            value={name}
            onChange={(e) => {
              // Short answer: both execute, in order, top → bottom.
              // React does NOT update state immediately
              // Both updates are batched by React into one re-render
              setIsEditing(true);
              setName(e.target.value);
            }}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-stone-600">
            Phone number
          </label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all placeholder:text-stone-400
         focus:outline-none focus:ring focus:ring-yellow-200 
         bg-white shadow-sm md:px-6 md:py-3"
            type="tel"
            name="phone"
            required
          />
          {formErrors?.phone && (
            <p className="text-sm text-red-500">{formErrors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-stone-600">
            Address
          </label>
          <input
            className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all placeholder:text-stone-400
         focus:outline-none focus:ring focus:ring-yellow-200 
         bg-white shadow-sm md:px-6 md:py-3"
            type="text"
            name="address"
            disabled={isLoadingAddress}
            defaultValue={address}
            required
          />
          {addressStatus === "error" && (
            <p className="text-sm text-red-500">{error}</p>
          )}
        </div>

        {!position.latitude && !position.longitude && (
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
            disabled={isLoadingAddress}
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAddress());
            }}
          >
            {addressStatus === "loading"
              ? "Fetching User Data..."
              : "Fetch User Data"}
          </button>
        )}
        {/* Priority */}
        <div className="flex items-center gap-3">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => {
              setwithPriority(e.target.checked);
            }}
          />
          <label
            htmlFor="priority"
            className="text-sm font-medium text-stone-700"
          >
            Want to give your order priority?
          </label>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />

          <Button
            disabled={isSubmitting}
            className="w-full bg-yellow-400 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting || isLoadingAddress
              ? "Placing Order.."
              : `Order Now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  console.log(request);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  // console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "give correct phone number ..!";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  // if everything is ok , create  new order and redirect
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);

  // request is a Fetch API Request object:
  // request.method      // "POST"
  // request.url         // "http://localhost:5173/order"
  // request.headers
  // request.formData()
  // request.json()
  // request.text()
}

export default CreateOrder;
