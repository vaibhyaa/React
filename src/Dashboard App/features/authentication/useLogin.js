import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // onSuccess(user):-
  // user = whatever mutationFn returns successfully
  // Here mutationFn calls loginApi(...)
  // So user is the resolved return value of loginApi()
  // onError(err):-
  // err = the error thrown by mutationFn
  // If loginApi() throws new Error(...)
  // That thrown error goes into onError(err)
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),

    onSuccess: (user) => {
      // console.log(user);
      queryClient.setQueryData(["user"], user.user);
      toast.success("Logged in successfully");
      navigate("/dashboard", { replace: true });
      // replace:true
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
