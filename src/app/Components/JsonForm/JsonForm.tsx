"use client";

import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi2";
import { PiHeartDuotone } from "react-icons/pi";
import { RiUploadCloud2Fill } from "react-icons/ri";
import PersonalDataForm from "./PersonalDataForm";
import VisaCategoryForm from "./VisaCategoryForm";
import ResumeUploadForm from "./ResumeUploadForm";
import HelpDescriptionForm from "./HelpDescriptionForm";
import SubmitForm from "./SubmitForm";

const initPersonalData = {};
const initVisaCategoryData = {};
const initHelpDescriptionData = {};

const JsonForm = () => {
  const [showError, setShowError] = useState(false);
  const [personalData, setPersonalData] = useState(initPersonalData);
  const [helpDescriptionData, setHelpDescriptionData] = useState(
    initHelpDescriptionData
  );
  const [visaCategoryData, setVisaCategoryData] =
    useState(initVisaCategoryData);

  return (
    <div className="grid grid-cols-12 gap-4 items-center text-center my-10">
      {/* Basic Assessment - section */}
      <div className="col-span-6 col-start-4">
        <p className="flex justify-center my-10">
          <HiDocumentText className="customIcons" />
        </p>
        <h1 className="text-3xl font-bold">
          Want to understand your visa options?
        </h1>
        <p className="text-2xl font-bold mt-10">
          Submit the form below and our team of experienced attorneys will
          review your information and send a preliminary assessment of your case
          based on your goals.
        </p>
        <PersonalDataForm
          showError={showError}
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
      </div>

      {/* Visa interest - section */}
      <div className="col-span-6 col-start-4">
        <p className="flex justify-center my-10">
          <GiPerspectiveDiceSixFacesTwo className="customIcons" />{" "}
        </p>
        <h1 className="text-3xl font-bold">Visa categories of interest?</h1>
        <VisaCategoryForm
          showError={showError}
          visaCategoryData={visaCategoryData}
          setVisaCategoryData={setVisaCategoryData}
        />
      </div>

      {/* Upload your resume - section */}
      <div className="col-span-6 col-start-4">
        <p className="flex justify-center mb-10">
          <RiUploadCloud2Fill className="customIcons" />
        </p>
        <h1 className="text-3xl font-bold ">Upload your Resume / CV</h1>
        <ResumeUploadForm />
      </div>

      {/* How can we help - section */}
      <div className="col-span-6 col-start-4">
        <p className="flex justify-center my-10">
          <PiHeartDuotone className="customIcons" />
        </p>
        <h1 className="text-3xl font-bold ">How can we help you?</h1>
        <HelpDescriptionForm
          helpDescriptionData={helpDescriptionData}
          setHelpDescriptionData={setHelpDescriptionData}
        />
      </div>

      {/* Form Submit - section */}
      <SubmitForm
        firstName={personalData?.firstName}
        lastName={personalData?.lastName}
        email={personalData?.email}
        citizenship={personalData?.citizenship}
        profileUrl={personalData?.profileUrl}
        helpDescription={helpDescriptionData?.helpDescription}
        status="Pending"
        visaCategory={visaCategoryData?.visaCategory}
        setShowError={setShowError}
      />
    </div>
  );
};

export default JsonForm;
