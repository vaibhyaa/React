/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinFormCopy";
import { useDeleteCabin } from "./useDeleteCabin";
import { IoDuplicateOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCreateCabin } from "./useCreateCabin";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  margin: 8px 10px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  // this state will open the form for edit cabin
  const [showEditForm, setshowEditForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  return (
    <>
      <TableRow role="row">
        <Img src={image} alt="" />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Button
          disabled={isCreating}
            onClick={() => {
              createCabin({
                name: `Copy of ${name}`,
                maxCapacity,
                regularPrice,
                discount,
                image,
                description,
              });
            }}
          >
            <IoDuplicateOutline />
          </Button>
          <Button onClick={() => setshowEditForm((prevState) => !prevState)}>
            <CiEdit />
          </Button>
          {/* with the help of react mutate remote state : deleting a cabin and automatically re-fresh Tthe UI */}
          <Button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <FaRegTrashAlt />
          </Button>
        </div>
      </TableRow>
      {showEditForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
