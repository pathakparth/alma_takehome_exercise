"use client";

import React, { useActionState } from "react";
import { redirect } from "next/navigation";
import { intakeFormSchema } from "@/app/actions/intakeForm";
import { PersonalData } from "@/app/Types/LeadFormInputs";

const SubmitForm = (props: PersonalData) => {
  const [state, formAction, isPending] = useActionState(
    intakeFormSchema,
    undefined
  );

  const {
    firstName,
    lastName,
    email,
    citizenship,
    profileUrl,
    helpDescription,
    visaCategory,
    status,
  } = props;

  const handleSubmit = (e: any) => {
    e?.preventDefault();

    if (
      state?.errors ||
      !firstName?.length ||
      !lastName?.length ||
      !email?.length ||
      !citizenship?.length ||
      !profileUrl?.length ||
      !helpDescription?.length ||
      !visaCategory?.length ||
      !status?.length
    ) {
      props.setShowError(true);
    } else {
      if (
        firstName?.length &&
        lastName?.length &&
        email?.length &&
        citizenship?.length &&
        profileUrl?.length &&
        helpDescription?.length &&
        visaCategory?.length &&
        status?.length
      ) {
        props.setShowError(false);
        redirect(`/thankyou`); // Navigate to the new post page
      }
    }
  };

  return (
    <div className="col-span-4 col-start-5 mx-6 my-10">
      <form action={formAction} onSubmit={handleSubmit}>
        <input
          type="text"
          hidden
          name="firstName"
          defaultValue={firstName}
        ></input>
        <input
          type="text"
          hidden
          name="lastName"
          defaultValue={lastName}
        ></input>
        <input type="text" hidden name="email" defaultValue={email}></input>
        <input
          type="text"
          hidden
          name="citizenship"
          defaultValue={citizenship}
        ></input>
        <input
          type="text"
          hidden
          name="profileUrl"
          defaultValue={profileUrl}
        ></input>
        <input
          type="text"
          hidden
          name="helpDescription"
          defaultValue={helpDescription}
        ></input>
        <input
          type="array"
          hidden
          name="visaCategory"
          defaultValue={visaCategory}
        ></input>
        <input type="text" hidden name="status" defaultValue={status}></input>
        <button
          type="submit"
          disabled={isPending}
          className="btn btn-neutral btn-block"
        >
          {isPending ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
