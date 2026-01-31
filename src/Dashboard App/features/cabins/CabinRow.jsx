/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

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
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("successfully deleted");
    },
    onError: (error) => toast.error(error.message),
  });
  return (
    <TableRow role="row">
      <Img src={image} alt="" />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guesta</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>

      {/* with the help of react mutate remote state : deleting a cabin and automatically re-fresh Tthe UI */}
      <Button onClick={() => mutate(cabinId)} disabled={isDeleting}>
        Delete
      </Button>
    </TableRow>
  );
};

export default CabinRow;

// “deleteCabin is a service function that deletes a cabin by ID using Supabase.
// It performs a DELETE query on the cabins table and throws an error if the operation fails, which allows React Query to handle error states properly.
// This function is typically used inside a React Query mutation, after which we invalidate the cabins query to refetch fresh data.”

// // “I’m using React Query’s useMutation to delete a cabin.
// The mutation function calls a Supabase delete API.
// While the mutation is running, I use the loading state to disable the button.
// On success, I invalidate the cabins query so the UI automatically refetches fresh data.”
