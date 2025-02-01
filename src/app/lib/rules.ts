import z from "zod";

export const IntakeFormSchema = z
  .object({
    firstName: z
      .string({
        message: "Please enter a valid first name",
      })
      .min(2, {
        message: "Please enter a valid first name",
      })
      .trim(),
    lastName: z
      .string({
        message: "Please enter a valid last name",
      })
      .min(2, {
        message: "Please enter a valid last name",
      })
      .trim(),
    email: z
      .string({
        message: "Please enter a valid email",
      })
      .email({
        message: "Please enter a valid email",
      })
      .trim(),
    citizenship: z
      .string({
        message: "Please select a valid citizenship",
      })
      .min(2, {
        message: "Please enter a valid last name",
      })
      .trim(),
    profileUrl: z
      .string({
        message: "Please enter a valid link",
      })
      .url({
        message: "Please enter a valid link",
      })
      .trim(),
    visaCategory: z
      .string({
        message: "Please select atleast one visa category",
      })
      .array()
      .length(1, {
        message: "Please select atleast one visa category",
      }),
    helpDescription: z
      .string({
        message: "Please enter a valid description",
      })
      .min(2, {
        message: "Please enter a valid description",
      })
      .trim(),
  })
  .superRefine((val, ctx) => {
    return val;
  });
