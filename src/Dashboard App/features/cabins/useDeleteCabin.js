import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("successfully deleted");
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteCabin };
}



// “deleteCabin is a service function that deletes a cabin by ID using Supabase.
// It performs a DELETE query on the cabins table and throws an error if the operation fails, which allows React Query to handle error states properly.
// This function is typically used inside a React Query mutation, after which we invalidate the cabins query to refetch fresh data.”

// // “I’m using React Query’s useMutation to delete a cabin.
// The mutation function calls a Supabase delete API.
// While the mutation is running, I use the loading state to disable the button.
// On success, I invalidate the cabins query so the UI automatically refetches fresh data.”