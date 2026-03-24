import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useGetSettings() {
  const settingQuery = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  //   console.log(settingQuery);
  return settingQuery;
}
// useQuery returns data, not settings directly.
// even if you return settingQuery while using always use data and then you can assign that data to any variable
// example:-
// const { data: settings, isLoading: isLoadingSetting } = useGetSettings();

// returns full React Query object:
// data
// isLoading
// error
// isError
// refetch
// etc.
