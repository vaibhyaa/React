/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
import SingleButton from "../../ui/Button";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  // this state for changing the buttion text when we edit the cabin / add the new cabin but with the help of useForm we can create session and use for text change
  // const [showEditButtonText, setshowEditButtonText] = useState("Add Cabin");

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    // defaultValues: isEditSession ? { editValues, image: undefined } : {},
    defaultValues: isEditSession ? editValues : {},
  });

  // const { errors } = useForm();

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  return (
    <Form
      onSubmit={handleSubmit(
        (cabinData) => {
          // console.log(cabinData);
          const image =
            typeof cabinData.image === "string"
              ? cabinData.image
              : cabinData.image[0];

          if (isEditSession) {
            editCabin(
              {
                newCabinData: { ...cabinData, image },
                id: editId,
              },
              {
                onSuccess: () => {
                  reset({
                    name: "",
                    maxCapacity: "",
                    regularPrice: "",
                    discount: 0,
                    description: "",
                    image: undefined,
                  });
                },
              },
            );
          } else {
            createCabin(
              { ...cabinData, image: image },
              {
                onSuccess: () => {
                  reset();
                },
              },
            );
          }
        },

        () => {
          toast.error("Please Fix The Highlighted Errors");
        },
      )}
    >
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: `This field is required`,
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
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Cabin Regular price"
        error={errors?.regularPrice?.message}
      >
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be atleast one",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
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
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* {!isEditSession && (
        <FormRow label="Cabin Photo">
          <FileInput
            id="image"
            accept="image/*"
            {...register("image", {
              required: isEditSession ? false : "This field is required..",
            })}
          />
        </FormRow>
      )} */}

      <FormRow label="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <SingleButton variation="secondary" type="reset">
          Cancel
        </SingleButton>

        <SingleButton disabled={isWorking}>
          {isEditSession ? "Edit Cabin" : "Create New Cabin"}
        </SingleButton>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

// Supabase DB
//    ↓
// cabinToEdit (OLD)
//    ↓ (defaultValues)
// react-hook-form
//    ↓
// data (NEW / EDITED)
//    ↓ (normalize image)
// newCabinData
//    ↓
// API (createEditCabin)
