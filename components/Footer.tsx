/**----------------------------------------------------------------------------------
 * FOOTER
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 16, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

"use client"; // This is a client component
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

interface FooterProps {
  collected: number;
}

const Footer: React.FC<FooterProps> = ({ collected }) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.blank}></div>
        <div className={styles.footerLogo}>
          <Image
            src="/images/mirage-logo.svg"
            alt="Mirage Logo"
            width={48}
            height={27}
            priority
          />
          <span className={styles.footerText}>[ Mirage x FWB ]</span>
        </div>
        <div className={styles.footerCounter} suppressHydrationWarning>
          {collected}/5
        </div>
      </div>
    </>
  );
};

export default Footer;
