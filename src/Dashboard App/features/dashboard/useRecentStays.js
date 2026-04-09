import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    // queryKey: ["stays"] is the unique cache key / identifier for that query in React Query (TanStack Query)
    // “Store and track this fetched data in React Query cache under the name stays.”
    queryKey: ["stays", `last-${numDays}`],
  });

  // console.log(stays);

  const confirmedStays = stays?.filter(
    (eachStay) =>
      eachStay.status === "checked-in" || eachStay.status === "checked-out",
  );

  return { confirmedStays, isLoading, stays, numDays };
}

// React Query needs to know:
// what data is being fetched
// how to cache it
// when to refetch it
// which query to invalidate later

// so use
// queryKey
// as the identity of the query.

// This tells React Query:
// fetch using getStays
// cache the result under key:
// ["stays"]
