/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  // now use useRouteError
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-2xl font-semibold text-stone-800">
        Something went wrong 😢
      </h1>

      <p className="mb-6 max-w-md text-sm text-stone-600">
        {error?.data || error?.message}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="
      rounded-full
      bg-yellow-400
      px-6 py-2
      text-sm font-semibold uppercase
      text-stone-800
      transition-colors duration-300
      hover:bg-yellow-300
      focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
    "
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default Error;
