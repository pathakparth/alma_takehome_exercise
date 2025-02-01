import React from "react";

const HelpDescriptionForm = (props: any) => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center text-center mt-10">
      <div className="col-span-4 col-start-2">
        {/* INPUT - Help textarea */}
        <textarea
          rows={5}
          value={props.helpDescriptionData.helpDescription}
          onChange={(event) =>
            props.setHelpDescriptionData({
              helpDescription: event.target.value,
            })
          }
          name="helpDescription"
          placeholder="Whats your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
          className="textarea textarea-bordered textarea-lg w-full max-w-lg rounded-xl"
        ></textarea>
      </div>
    </div>
  );
};

export default HelpDescriptionForm;
