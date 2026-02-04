/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useGetSettings } from "./useGetSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { data: settingsAllData = {}, isLoading, error } = useGetSettings();
  // initially we can set settingsdata to empty object so weill not get any error of undefined
  const { isUpdating, updateSetting } = useUpdateSettings();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   getValues,
  //   formState: { errors },
  //   onBlur,
  // } = useForm({
  //   // defaultValues: isEditSession ? { editValues, image: undefined } : {},
  //   // defaultValues: isEditSession ? editValues : {},
  // });

  return (
    <Form
    // // onSubmit={(settingData) => {
    //   updateSetting(settingData);
    // }}
    >
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={settingsAllData.minBookingLength}
          onBlur={(e) => {
            const value = Number(e.target.value);
            if (!value || value === settingsAllData.minBookingLength) return;
            updateSetting({ minBookingLength: value });
          }}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={settingsAllData.maxBookingLength}
          onBlur={(e) => {
            const value = Number(e.target.value);
            if (!value || value === settingsAllData.maxBookingLength) return;
            updateSetting({ maxBookingLength: value });
          }}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={settingsAllData.maxGuestsPerBooking}
          onBlur={(e) => {
            const value = Number(e.target.value);
            if (!value || value === settingsAllData.maxGuestsPerBooking) return;
            updateSetting({ maxGuestsPerBooking: value });
          }}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={settingsAllData.breakfastPrice}
          onBlur={(e) => {
            const value = Number(e.target.value);
            if (!value || value === settingsAllData.breakfastPrice) return;
            updateSetting({ breakfastPrice: value });
          }}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
