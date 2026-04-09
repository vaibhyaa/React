/* eslint-disable react/prop-types */
import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const Statistics = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  // console.log(confirmedStays);

  // 1 number of bookings
  const numBookings = bookings.length;

  //   2 total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //   3 total check-in
  const checkIn = confirmedStays.length;
  //   console.log(checkIn);

  // 4
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  //   console.log(occupation);
  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check Ins"
        color="indogo"
        icon={<HiOutlineCalendarDays />}
        value={checkIn}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation*100) + "%"}
      />
    </>
  );
};

export default Statistics;
