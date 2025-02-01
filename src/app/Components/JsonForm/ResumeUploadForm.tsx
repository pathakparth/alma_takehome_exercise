import React from "react";

const ResumeUploadForm = () => {
  return (
    <input
      type="file"
      name="resume"
      className="grow text-md file-input file-input-bordered w-full max-w-lg my-10 rounded-xl cursor-pointer"
      placeholder="Upload Resume / CV"
    />
  );
};

export default ResumeUploadForm;
