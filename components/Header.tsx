/**----------------------------------------------------------------------------------
 * The Display card for the contract page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/fwb-logo.svg"
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
