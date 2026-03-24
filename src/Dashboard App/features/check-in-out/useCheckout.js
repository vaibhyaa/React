import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();
  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    // the data which will be returned from updateBooking function will be returned from this mutationFn also can be usedin onSuccess , onError
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
        // isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
      // navigate("/");
    },
    onError: () => {
      toast.error("There was an error while checking out");
    },
  });
  return { checkout, isCheckingout };
}
