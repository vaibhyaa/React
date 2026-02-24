import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By Name (A-Z)" },
          {
            value: "name-desc",
            label: "Sort By Name (Z-A)",
          },
          {
            value: "regularPrice-asc",
            label: "Sort By Regular Price (Low to High)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort By Regular Price (High to Low)",
          },

          {
            value: "maxCapacity-asc",
            label: "Sort By Max Capacity (Low to High)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort By Max Capacity (High to Low)",
          },
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
