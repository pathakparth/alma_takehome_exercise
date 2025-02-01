"use server";

import { IntakeFormSchema } from "@/app/lib/rules";

export const intakeFormSchema = async (state: any, formData: any) => {
  const validatedFields = IntakeFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    citizenship: formData.get("citizenship"),
    profileUrl: formData.get("profileUrl"),
    visaCategory: formData.get("visaCategory").split(","),
    helpDescription: formData.get("helpDescription"),
    status: formData.get("status"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      citizenship: formData.get("citizenship"),
      profileUrl: formData.get("profileUrl"),
      visaCategory: formData.get("visaCategory"),
      helpDescription: formData.get("helpDescription"),
      status: formData.get("status"),
    };
  }
};
