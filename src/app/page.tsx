import React from "react";
import Link from "next/link";
import Banner from "./Components/Banner/Banner";
import JsonForm from "./Components/JsonForm/JsonForm";

const Home = () => {
  return (
    <div className="static">
      <main className="flex flex-col">
        <Banner></Banner>
        <div>
          <JsonForm></JsonForm>
        </div>
      </main>
      <div className="absolute top-10 right-10">
        <Link
          href="/dashboard"
          className="btn btn-lg btn-ghost no-animation cursor-pointer rounded-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
