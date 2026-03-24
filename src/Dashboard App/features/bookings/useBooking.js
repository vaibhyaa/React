import { useQuery } from "@tanstack/react-query";
import { getBooking, getBookings } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
    // by default react Query will try to fetch data 3 times in case if it fails in beginning
    // so we deactivate that by retry: false
  });

  return { isLoading, booking, error };
}

// ALL ABOUT useQuery:-
// Calls getBookings() → fetches data from Supabase
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

// useQuery:-
// Comes from @tanstack/react-query , and Used for reading (GET) data
// fetching , caching ,loading state ,error state ,refetching ,background updates

// queryKey: ["cabins"] : -
// Unique ID for this query in React Query cache
// Think of it as a cache key
// React Query uses it to: cache data ,refetch data , invalidate data

// queryClient.invalidateQueries({ queryKey: ["cabins"] });
// his tells React Query: “Hey, the cabins data is stale → refetch it”

// queryFn: getCabins 👉 What is queryFn?
// The function that actually fetches data
// Must return a Promise
// call it automatically , retry on failure ,cache the result

// return cabinQuery;
// 👉 What is inside cabinQuery?
// useQuery returns an object, not just data.

// useGetCabin is a reusable hook that uses React Query to fetch, cache, and manage the cabins data, and returns all query states so components can easily consume them.

// React Query has two main hooks:
// Hook	Used for
// useQuery	Reading data (GET)
// useMutation	Writing data (POST / PUT / DELETE)
// mutate and mutationFn belong to useMutation.
