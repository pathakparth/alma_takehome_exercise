import React from "react";
import Link from "next/link";
import { IoCloudDone } from "react-icons/io5";

const ThankYouPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 items-center text-center my-10">
      {/* Basic Assessment - section */}
      <div className="col-span-6 col-start-4">
        <p className="flex justify-center my-10">
          <IoCloudDone className="customIcons" />
        </p>
        <h1 className="text-3xl font-bold">Thank You</h1>
        <p className="text-2xl font-bold mt-10">
          Your information was submitted to our team of immigration attorneys.
          Expect an email from hello@tryalma.ai.
        </p>
        <div className="w-50 my-10">
          <Link href="/" className="btn btn-md btn-neutral">
            <span className="px-10">Go Back to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
