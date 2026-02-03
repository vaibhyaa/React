import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  // console.log(queryClient);

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

// What is useQueryClient()?
// Comes from @tanstack/react-query
// Gives access to the global query cache
// 👉 Important: useQueryClient does NOT fetch data

// What can queryClient do?
// invalidateQueries
// setQueryData
// removeQueries
// prefetchQuery


// useMutation
// Used for writing data: POST, PUT, PATCH, DELETE

// mutationFn
// The function that actually deletes the cabin
// Must return a Promise

// onSuccess: () => { ... }
// 👉 Runs ONLY when delete succeeds


// queryClient.invalidateQueries({ queryKey: ["cabins"] });
// What this does
// Marks "cabins" query as stale
// React Query automatically refetches cabins
// UI updates without page refresh
// 📌 This is why the deleted cabin disappears from UI


// onError: (error) => toast.error(error.message),
// 👉 Runs when delete fails
// Shows backend or network error
// Prevents silent failures


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






// User clicks Delete
// ↓
// deleteCabin(id)
// ↓
// Supabase DELETE request
// ↓
// onSuccess runs
// ↓
// invalidateQueries(["cabins"])
// ↓
// useQuery refetches cabins
// ↓
// UI updates automatically




// deleteCabin(id)
// ↓
// mutationFn(id)
// ↓
// deleteCabinApi(id)
// ↓
// Supabase DELETE
// ↓
// ┌───────────────┐
// │ success?      │
// └──────┬────────┘
//        │
//    YES │ NO
//        │
// resolve()   reject(error)
//    ↓             ↓
// onSuccess     onError
