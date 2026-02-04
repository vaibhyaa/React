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
