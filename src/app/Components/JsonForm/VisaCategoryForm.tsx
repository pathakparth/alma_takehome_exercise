"use client";

import React from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { VISA_CATEGORIES } from "@/app/Utils/Constants";

const config = {
  restrict: false,
  trim: false,
  showUnfocusedDescription: false,
  hideRequiredAsterisk: true,
};

const visaCategorySchema = {
  type: "object",
  properties: {
    visaCategory: {
      type: "array",
      uniqueItems: true,
      items: {
        oneOf: VISA_CATEGORIES,
      },
    },
  },
  required: ["visaCategory"],
};

const visaCategoryUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/visaCategory",
      label: "",
    },
  ],
};

const VisaCategoryForm = (props: any) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center text-center mt-10">
      <div className="col-span-4 col-start-2">
        <JsonForms
          data={props.visaCategoryData}
          config={config}
          schema={visaCategorySchema}
          uischema={visaCategoryUiSchema}
          cells={materialCells}
          renderers={materialRenderers}
          validationMode={
            props.showError ? "ValidateAndShow" : "ValidateAndHide"
          }
          onChange={({ data }) => props.setVisaCategoryData(data)}
        />
      </div>
    </div>
  );
};

export default VisaCategoryForm;
