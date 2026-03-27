import { useQuery } from "@tanstack/react-query";
import { getCurrentUSer } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUSer,
  });

  console.log(user);

  return { isLoading, user };
}



// useQuery(...) runs getCurrentUSer
// then React Query gives you back an object like:
// {
//   data: ...,        // whatever getCurrentUSer returns
//   error: ...,       // error object if query fails
//   isLoading: ...,   // true while query is running
//   isError: ...,
//   status: ...,
//   refetch: ...,
//   ...
// }



// This comes from your query function return value
// Your query function:
// queryFn: getCurrentUSer
// And inside:
// return data?.user;

// So React Query stores that returned value in:
// data
// Then you rename it:
// data: user

// So now:
// data from React Query → renamed to user


// isLoading
// This comes from React Query internal state
// While getCurrentUSer() is still running:
// isLoading = true

// When it finishes:
// isLoading = false

// You don’t create it.
// React Query gives it automatically.






// error
// This also comes from React Query

// If your query function throws:
// throw new Error(error.message);

// React Query catches it and stores it in:
// error

// So then:
// error.message
// contains that error message.