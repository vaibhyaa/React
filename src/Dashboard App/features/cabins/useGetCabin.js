import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useGetCabin() {
  const cabinQuery = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });

  // return {isLoading,cabins,error};
  return cabinQuery;
}

// ALL ABOUT useQuery:-
// Calls getCabins() → fetches data from Supabase
// Stores result in React Query cache
// Subscribes component to cache
// Auto re-renders when data changes
// Handles:loading state, error state , caching

// When to use
// ✔ Fetch data
// ✔ Display data
// ✔ Keep UI in sync with server

// Use useQuery when:
// Loading lists
// Showing details
// Displaying dashboards

// background refetch
// useQuery = read data
// useQueryClient = control data

// | Hook                 | What it is        | What it does                                  |
// | -------------------- | ----------------- | --------------------------------------------- |
// | **`useQuery`**       | Data **reader**   | Fetches & subscribes to server data           |
// | **`useQueryClient`** | Cache **manager** | Controls queries (invalidate, update, remove) |

// useQuery → read cabins
// useMutation → create cabin
// useQueryClient → refresh cache
