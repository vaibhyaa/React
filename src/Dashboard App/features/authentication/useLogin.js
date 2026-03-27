import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),

    onSuccess: (user) => {
      // console.log(user);
      queryClient.setQueriesData(["user"], user);
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
      // replace:tru
      // Because:
      // user should not go back to protected dashboard with back button
      // user should not go back to login page after logging in
      // better UX
      // cleaner auth flow
    },

    onError: (err) => {
      // console.log(err);
      // Show custom friendly message
      // Because Supabase/backend message may be:-
      // technical
      // inconsistent
      // not user-friendly
      toast.error("Provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}
