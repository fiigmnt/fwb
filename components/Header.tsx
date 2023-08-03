/**----------------------------------------------------------------------------------
 * The Header for the app
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 16, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

"use client;"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [progress, setProgress] = useState(0); // <-- add state for progress

  // This function simulates progress increase
// You will replace this with your own logic to set the progress
const simulateProgress = () => {
  setProgress((oldProgress) => {
    if (oldProgress === 100) {
      return 0;
    }
    const diff = Math.random() * 10;
    return Math.min(oldProgress + diff, 100);
  });
};

useEffect(() => {
  const timer = setInterval(simulateProgress, 1500);

  return () => {
    clearInterval(timer);
  };
}, []);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/images/fwb-logo.svg"
            alt="FWB Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Header;
