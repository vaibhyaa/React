/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
import SingleButton from "../../ui/Button";

const Label = styled.label`
  font-weight: 500;
`;

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created ...!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  return (
    <Form
      onSubmit={handleSubmit(
        (newCabinDate) => {
          mutate(newCabinDate);
        },
        (error) => {
          toast.error("Please fix the highlighted errors");
          // console.log(error);
        },
      )}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: `This field is required..`,
          })}
        />
      </FormRow>

      <FormRow
        label="Cabin Maximum Capacity"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required..",
            min: {
              value: 1,
              message: "Capacity should be at least one..",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Cabin Regular price "
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required..",
            min: {
              value: 1,
              message: "Price should be atleast one..",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isCreating}
          {...register("discount", {
            required: "This field is required..",
            validate: (value) =>
              Number(value) < Number(getValues().regularPrice) ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isCreating}
          defaultValue=""
          {...register("description", {
            required: "This field is required..",
          })}
        />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <SingleButton variation="secondary" type="reset">
          Cancel
        </SingleButton>

        <SingleButton disabled={isCreating}>Add cabin</SingleButton>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

// ALL ABOUT useQueryClient :-
// Gives access to the central query cache
// Does NOT fetch data
// Used to: invalidateQueries , setQueryData , removeQueries , prefetchQuery

// use when :-
// After create / update / delete
// Optimistic UI
// Manual cache updates

// useQuery → read cabins
// useMutation → create cabin
// useQueryClient → refresh cache
