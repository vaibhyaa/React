/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking.js";
import Spinner from "../../ui/Spinner.jsx";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;


function BookingDetail() {
  // 1️⃣ navigate function for redirecting to another page
  const navigate = useNavigate();

  // 2️⃣ get bookingId from URL
  // Example route: /bookings/12
  // bookingId = "12"
  const { bookingId } = useParams();

  // 3️⃣ custom hook fetches single booking details from API
  const { booking, isLoading } = useBooking();

  // 4️⃣ custom hook to go back to previous page
  const moveBack = useMoveBack();

  // 5️⃣ while data is loading, show spinner
  if (isLoading) {
    return <Spinner />;
  }

  // 6️⃣ map booking status to tag color
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          {/* 7️⃣ show booking id */}
          <Heading as="h1">Booking #{booking.id}</Heading>

          {/* 8️⃣ use REAL booking.status for both color and text */}
          <Tag type={statusToTagName[booking.status]}>
            {booking.status.replace("-", " ")}
          </Tag>
        </HeadingGroup>

        {/* 9️⃣ go back to previous page */}
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {/* 🔟 pass booking data to details box */}
      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {/* 1️⃣1️⃣ Show Check In button ONLY if booking is unconfirmed */}
        {booking.status === "unconfirmed" && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check In
          </Button>
        )}

        {/* 1️⃣2️⃣ Back button */}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
