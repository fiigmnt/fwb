/**----------------------------------------------------------------------------------
 * Main page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Header from "../components/Header";
import Mapbox from "../components/Map";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.map}>
          <Mapbox />
        </div>
      </main>
    </>
  );
}
