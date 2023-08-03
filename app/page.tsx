/**----------------------------------------------------------------------------------
 * Main page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/
// "use client";



import React, { use, useEffect } from "react";
import Mapbox from "../components/Map";
// import { v4 as uuidv4 } from "uuid";

import Header from "../components/Header";
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