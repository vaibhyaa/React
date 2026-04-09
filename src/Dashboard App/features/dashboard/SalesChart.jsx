/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import React from "react";
import DashboardBox from "./DashboardBox";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  /* & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  } */
`;

// const fakeData = [
//   { label: "Jan 09", totalSales: 480, extrasSales: 20 },
//   { label: "Jan 10", totalSales: 580, extrasSales: 100 },
//   { label: "Jan 11", totalSales: 550, extrasSales: 150 },
//   { label: "Jan 12", totalSales: 600, extrasSales: 50 },
//   { label: "Jan 13", totalSales: 700, extrasSales: 150 },
//   { label: "Jan 14", totalSales: 800, extrasSales: 150 },
//   { label: "Jan 15", totalSales: 700, extrasSales: 200 },
//   { label: "Jan 16", totalSales: 650, extrasSales: 200 },
//   { label: "Jan 17", totalSales: 600, extrasSales: 300 },
//   { label: "Jan 18", totalSales: 550, extrasSales: 100 },
//   { label: "Jan 19", totalSales: 700, extrasSales: 100 },
//   { label: "Jan 20", totalSales: 800, extrasSales: 200 },
//   { label: "Jan 21", totalSales: 700, extrasSales: 100 },
//   { label: "Jan 22", totalSales: 810, extrasSales: 50 },
//   { label: "Jan 23", totalSales: 950, extrasSales: 250 },
//   { label: "Jan 24", totalSales: 970, extrasSales: 100 },
//   { label: "Jan 25", totalSales: 900, extrasSales: 200 },
//   { label: "Jan 26", totalSales: 950, extrasSales: 300 },
//   { label: "Jan 27", totalSales: 850, extrasSales: 200 },
//   { label: "Jan 28", totalSales: 900, extrasSales: 100 },
//   { label: "Jan 29", totalSales: 800, extrasSales: 300 },
//   { label: "Jan 30", totalSales: 950, extrasSales: 200 },
//   { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
//   { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
//   { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
//   { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
//   { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
//   { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
//   { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
// ];

import Heading from "../../ui/Heading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const SalesChart = ({ bookings, numDays }) => {
  // console.log(bookings, numDays);

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    const bookingsOnDate = bookings.filter((booking) =>
      isSameDay(date, new Date(booking.created_at)),
    );

    return {
      label: format(date, "MMM dd"),
      totalSales: bookingsOnDate.reduce(
        (acc, curr) => acc + curr.totalPrice,
        0,
      ),
      extrasSales: bookingsOnDate.reduce(
        (acc, curr) => acc + curr.extrasPrice,
        0,
      ),
    };
  });

  // console.log(data);

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>
      {/* It makes the chart responsive. */}
      <ResponsiveContainer height={300} width="100%">
        {/* This is the main chart wrapper for an area chart. */}
        <AreaChart data={data}>
          {/* Defines the horizontal (X) axis. */}
          <XAxis
            dataKey="label"
            tick={{ fill: "blue"}}
            tickLine={{ stroke: "red" }}
          />
          <YAxis unit="$" tick={{ fill: "blue", fontSize: 12 }} />
          {/* <CartesianGrid /> */}
          <CartesianGrid strokeWidth={1} />

          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="blue"
            fill="lightblue"
            strokeWidth={1.5}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extraSales"
            type="monotone"
            stroke="green"
            fill="lightgreen"
            strokeWidth={1.5}
            name="Extra sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
};

export default SalesChart;

// dataKey="label"
// Meaning:
// Tells Recharts which field from each object should be shown on X-axis.

// tick={{ fill: "blue" }}
// Meaning:
// Changes the text color of X-axis labels.
// tick is used to style the axis labels, like color, font size, etc.

// tickLine={{ stroke: "blue" }}
// Meaning:
// Styles the small line marks on the axis.

/* <YAxis />
Purpose:
Defines the vertical (Y) axis. */

/* <CartesianGrid />
Purpose:
Adds grid lines inside the chart. */

// Meaning:
// It draws background grid lines (horizontal and vertical)
// Helps read chart values more easily

// CartesianGrid adds background grid lines to improve readability. stroke sets the grid line color, and strokeWidth controls thickness.

{
  /* <Tooltip />
Purpose:
Shows a popup tooltip when you hover over the chart. */
}

{
  /* <Area />
Purpose:
This is the actual area series being drawn. */
}

// dataKey="totalSales"
// Meaning:
// Tells Recharts which field to plot on Y-axis
// Example:
// dataKey tells the Area component which numeric field to visualize.
