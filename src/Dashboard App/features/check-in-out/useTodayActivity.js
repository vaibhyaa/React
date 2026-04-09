import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const {
    data: activities,
    isLoading,
    error,
  } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
    staleTime: 1000 * 60, // 1 min cache
    refetchInterval: 1000 * 60, // every 1 min
  });
  // console.log(activities);

  return { activities, isLoading, error };
}

// Explanation (line by line)
// 1️⃣ useQuery
// Fetches data from API (Supabase here)
// Handles:
// loading
// caching
// refetching
// 2️⃣ queryFn
// queryFn: getStaysTodayActivity

// 👉 This function runs the query:

// calls Supabase
// returns bookings for today
// 3️⃣ queryKey
// queryKey: ["today-activity"]

// 👉 Unique identifier for caching

// React Query will:

// cache result
// reuse it across components
// refetch when needed
// 4️⃣ Renaming data
// data: activities

// 👉 Instead of data, you use activities
// Cleaner and readable ✅

// 5️⃣ Return
// return { activities, isLoading };

// Used like:

// const { activities, isLoading } = useTodayActivity();
