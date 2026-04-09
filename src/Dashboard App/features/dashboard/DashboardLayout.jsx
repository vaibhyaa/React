import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import Spinner from "../../ui/Spinner";

import React from "react";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Statistics from "./Statistics";
import { useGetCabin } from "../cabins/useGetCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import Today from "../check-in-out/TodayActivity";

const DashboardLayout = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();

  const { data: cabins, isLoading: isLoading3 } = useGetCabin();

  if (isLoading1 || isLoading2 || isLoading3) {
    return <Spinner />;
  }

  // console.log(bookings);
  // console.log(confirmedStays);
  // console.log(cabins);

  return (
    <StyledDashboardLayout>
      {/* <div>Statistics</div> */}
      <Statistics
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      {/* <div>Today's activity</div> */}
      <Today />

      {/* <div>chart stay durations</div> */}
      <DurationChart confirmedStays={confirmedStays} />
      {/* <div>chart sales </div> */}
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
