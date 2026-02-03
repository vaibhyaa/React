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




// React Query has two main hooks:
// Hook	Used for
// useQuery	Reading data (GET)
// useMutation	Writing data (POST / PUT / DELETE)
// mutate and mutationFn belong to useMutation.
// mutationFn is a function YOU provide to React Query that performs the actual write operation.
// mutate is a function React Query gives YOU.



//  Whenever you call mutate(data), React Query automatically executes mutationFn(data)
// regardless of whether it is DELETE, POST, PUT, PATCH, UPDATE, EDIT — anything.

// mutate sends data to React Query AND tells it: “Start the mutation lifecycle now. ”

// “Whenever mutate() is called → I will run mutationFn()
// and then handle success, error, loading, cache, retries, etc.”


// useMutation({
//   mutationFn,
//   onSuccess,
//   onError,
// });


// | Thing              | Role                       |
// | ------------------ | -------------------------- |
// | `mutate(data)`     | 🚀 Starts mutation         |
// | `mutationFn(data)` | 🛠 Does backend work       |
// | `onSuccess`        | ✅ Runs if Promise resolves |
// | `onError`          | ❌ Runs if Promise rejects  |
