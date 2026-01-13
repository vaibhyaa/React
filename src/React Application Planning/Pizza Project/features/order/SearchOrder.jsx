import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setquery("");
      }}
      className="relative"
    >
      <input
        placeholder="Search order"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="
          w-28 sm:w-64
          rounded-full
          bg-yellow-100
          px-4 py-2
          text-sm text-stone-700
          placeholder:text-stone-400
          transition-all duration-300
          focus:w-40 sm:focus:w-72
          focus:outline-none
          focus:ring-2 focus:ring-yellow-500
        "
      />
    </form>
  );
};

export default SearchOrder;
