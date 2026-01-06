import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!query) {
          return;
        }
        navigate(`/order/${query}`);
        setquery("");
      }}
    >
      <input
        placeholder="Search order "
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
