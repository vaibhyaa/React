/* eslint-disable react/react-in-jsx-scope */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSingUp";
import { data } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  // function onSubmit({ fullName, email, password }) {
  //   // console.log(data);
  //   signUp(
  //     { fullName, email, password },
  //     {
  //       onSettled: () => reset(),
  //     },
  //   );
  // }
  
  return (
    // <Form onClick={handleSubmit(onSubmit)}>
    <Form
      onSubmit={handleSubmit(({ fullName, email, password }) => {
        // console.log(data);
        signUp({ fullName, email, password }, { onSettled: () => reset() });
      })}
    >
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          disabled={isLoading}
          id="fullName"
          {...register("fullName", { required: "This field is requird" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is requird",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is requird",
            minLength: {
              value: 8,
              message: "Password needs a min of 8 characters ",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is requird",
            validate: (value) =>
              value === getValues().password || "Password needs to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoading} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          Create new user
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
