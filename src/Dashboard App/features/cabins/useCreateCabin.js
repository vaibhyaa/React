import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin as createEditCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabinData) => createEditCabinApi(newCabinData),
    // mutationFn: createEditCabinApi,

    onSuccess: () => {
      toast.success("New Cabin Successfully Created ...!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      //   reset();
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createCabin };
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
