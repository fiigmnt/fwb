/**----------------------------------------------------------------------------------
 * The Header for the app
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 16, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header: React.FC = () => {
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
