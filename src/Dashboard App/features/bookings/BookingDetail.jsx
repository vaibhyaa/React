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
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import { useBookingDelete } from "./useBookingDelete.js";

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

  const { checkout, isCheckingout } = useCheckout();

  const { deleteBooking, isDeleting } = useBookingDelete();

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
    "checked-out": "gray",
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

        {booking.status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => {
              checkout(bookingId);
              // navigate(`/bookings`);
            }}
            disabled={isCheckingout}
          >
            Check Out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete Booking</Button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>

        {/* 1️⃣2️⃣ Back button */}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
