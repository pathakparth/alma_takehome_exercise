import React from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { COUNTRY_CODES } from "@/app/Utils/Constants";

const config = {
  restrict: false,
  trim: false,
  showUnfocusedDescription: false,
  hideRequiredAsterisk: true,
};

const personalDataSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 1,
    },
    lastName: {
      type: "string",
    },
    email: {
      type: "string",
      minLength: 1,
    },
    citizenship: {
      type: "string",
      oneOf: COUNTRY_CODES,
    },
    profileUrl: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["firstName", "lastName", "email", "citizenship", "profileUrl"],
};

const personalDataUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/firstName",
      label: "First Name",
    },
    {
      type: "Control",
      scope: "#/properties/lastName",
      label: "Last Name",
    },
    {
      type: "Control",
      scope: "#/properties/email",
      label: "Email",
    },
    {
      type: "Control",
      scope: "#/properties/citizenship",
      label: "Country of Citizenship",
    },
    {
      type: "Control",
      scope: "#/properties/profileUrl",
      label: "LinkedIn / Personal Website URL",
    },
  ],
};

const PersonalDataForm = (props: any) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center text-center mt-10">
      <div className="col-span-4 col-start-2">
        <JsonForms
          data={props.personalData}
          config={config}
          schema={personalDataSchema}
          uischema={personalDataUiSchema}
          cells={materialCells}
          renderers={materialRenderers}
          validationMode={
            props.showError ? "ValidateAndShow" : "ValidateAndHide"
          }
          onChange={({ data }) => props.setPersonalData(data)}
        />
      </div>
    </div>
  );
};

export default PersonalDataForm;
