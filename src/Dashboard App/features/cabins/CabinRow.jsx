/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinFormCopy";
import { useDeleteCabin } from "./useDeleteCabin";
import { IoDuplicateOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

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
    <Table.Row>
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
        {/* <button
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
        </button> */}

        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              {/* duplicate button */}
              <Menus.Button
                icon={<IoDuplicateOutline />}
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
                Duplicate
              </Menus.Button>

              {/* edit button */}
              <Modal.Open opens="edit">
                <Menus.Button icon={<CiEdit />}>Edit</Menus.Button>
                {/* <Button
                onClick={() => setshowEditForm((prevState) => !prevState)}>
                <CiEdit />
              </Button> */}
              </Modal.Open>

              {/* delete button*/}
              <Modal.Open opens="delete">
                {/* <button 
                onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
                <FaRegTrashAlt />
                </button> */}
                <Menus.Button icon={<FaRegTrashAlt />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
          {/* with the help of react mutate remote state : deleting a cabin and automatically re-fresh Tthe UI */}
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default CabinRow;
