"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Leads from "../Components/Leads/Leads";
import styles from "./dashboard.module.css";
import { authenticateUser } from "../lib/sessions";

const Dashboard = () => {
  const username = prompt("Please enter username", "");
  const password = prompt("Please enter password", "");

  if (username?.length && password?.length) {
    const isAuthenticated = authenticateUser(username, password);
    if (!isAuthenticated) {
      redirect("/");
    }
  } else {
    redirect("/");
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className="drawer lg:drawer-open">
        {/* Page content here */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
          <Leads />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          ></label>
        </div>

        {/* Sidebar content here */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu border border-r-gray-200 text-base-content min-h-full w-80 p-4 flex flex-col">
            <div className="flex-none my-10 mx-5">
              <Image
                src="/images/almaLogo.png"
                loading="lazy"
                width={100}
                height={100}
                alt="Logo"
              />
            </div>
            <div className="grow">
              <div>
                <Link
                  href="/"
                  className="btn btn-lg btn-ghost no-animation cursor-pointer"
                >
                  Leads
                </Link>
              </div>
              <div>
                <Link
                  href="/"
                  className="btn btn-lg btn-ghost no-animation cursor-pointer"
                >
                  Settings
                </Link>
              </div>
            </div>
            {/* <div className="flex-none"></div> */}
            <div className="flex-none">
              <Link
                href="/"
                className="btn btn-lg btn-ghost no-animation cursor-pointer"
              >
                <div className="avatar placeholder mr-1">
                  <div className=" bg-gray-200 text-black text-black-content w-12 rounded-full">
                    <span>A</span>
                  </div>
                </div>
                <div className="text-lg text-black">Admin</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
