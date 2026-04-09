/* eslint-disable react/react-in-jsx-scope */
import SingleButton from "../../ui/Button";
import { useCheckout } from "./useCheckout.js";

function CheckoutButton({ bookingId }) {
  const { checkout, isLoading } = useCheckout();
  return (
    <SingleButton
      variation="primary"
      size="xs"
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
    >
      Check out
    </SingleButton>
  );
}

export default CheckoutButton;
