import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`${styles.bannerBackground} hero-content`}>
      <div className="basis-1/4">
        <Image
          src="/images/bannerImage.png"
          loading="lazy"
          width={100}
          height={100}
          alt="Banner"
          className="w-64"
        />
      </div>
      <div className="basis-3/4 my-20">
        <Image
          src="/images/almaLogo.png"
          loading="lazy"
          width={75}
          height={75}
          alt="Logo"
        />
        <h1 className="text-5xl font-black mt-10 mb-5">Get An Assessment</h1>
        <h1 className="text-5xl font-black mb-20">Of Your Immigration Case</h1>
      </div>
    </div>
  );
};

export default Banner;
