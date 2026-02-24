/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useGetCabin } from "./useGetCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import SortBy from "../../ui/SortBy";

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

const CabinTable = () => {
  const { data: cabinsAllData, isLoading, error } = useGetCabin();

  const [searchParams] = useSearchParams();
  // console.log(searchParams);

  if (isLoading) return <Spinner />;
  if (error) return <p>{error.message}</p>;
  // console.log(isLoading);
  // console.log(error);
  // console.log(cabins);

  // for filtring cabins based on discount
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") {
    filteredCabins = cabinsAllData;
  } else if (filterValue === "no-discount") {
    filteredCabins = cabinsAllData.filter((cabin) => cabin.discount === 0);
  } else if (filterValue === "with-discount") {
    filteredCabins = cabinsAllData.filter((cabin) => cabin.discount > 0);
  }

  // for sorting cabins based on sortBy
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [sortByField, sortByDirection] = sortBy.split("-");
  const sortedCabins = filteredCabins.sort((a, b) => {
    const diff = a[sortByField] - b[sortByField];
    return sortByDirection === "asc" ? diff : -diff;
  });
  return (
    <>
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div>Actions</div>
          </Table.Header>

          <Table.Body
            // cabinsAllData={cabinsAllData}
            // cabinsAllData={filteredCabins}
            cabinsAllData={sortedCabins}
            render={(eachCabin) => (
              <CabinRow cabin={eachCabin} key={eachCabin.id} />
            )}
          />
        </Table>
      </Menus>
    </>
  );
};

export default CabinTable;
