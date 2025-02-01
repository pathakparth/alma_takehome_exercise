import { Dispatch, SetStateAction } from "react";

export interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  citizenship: string;
  profileUrl: string;
  visaCategory: string[];
  helpDescription: string;
  status: string | "Pending" | "Reached Out";
  setShowError: Dispatch<SetStateAction<boolean>>;
}
