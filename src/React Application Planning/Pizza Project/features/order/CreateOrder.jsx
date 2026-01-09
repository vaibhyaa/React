/* eslint-disable react/react-in-jsx-scope */
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Cart from "../cart/Cart";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = fakeCart;
  const formErrors = useActionData();

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
            required
          />
        </div>

        {/* Priority */}
        <div className="flex items-center gap-3">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
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

          <Button
            disabled={isSubmitting}
            className="w-full bg-yellow-400 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Placing Order.." : "Order now"}
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
    priority: data.priority === "on",
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
