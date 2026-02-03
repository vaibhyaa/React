import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    // React Query mutationFn always receives exactly ONE argument.
    // If you need more, wrap them in an object.
    mutationFn: ({ newCabinData, id }) => createEditCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully Edited ...!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      // reset() WORKS FOR CREATE BUT NOT FOR EDIT
      // exiplicitly we have to tell to reset the form to empty values
      // reset();
    },
    onError: (error) => toast.error(error.message),
  }); 

  return { isEditing, editCabin };
}

// ALL ABOUT useQueryClient :-
// Gives access to the central query cache
// Does NOT fetch data
// Used to: invalidateQueries , setQueryData , removeQueries , prefetchQuery

// use when :-
// After create / update / delete
// Optimistic UI
// Manual cache updates

// useQuery → read cabins
// useMutation → create cabin
// useQueryClient → refresh cache
