/**----------------------------------------------------------------------------------
 * Main page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Mapbox from "../components/Map";
import Footer from "@/components/Footer";

import styles from "./page.module.css";

import { parseCookies } from "nookies";

export default function Home() {
  const cookies = parseCookies();
  const [collected, updateCollected] = useState(0);

  useEffect(() => {
    const collected = Object.keys(cookies).length;
    updateCollected(collected);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Header />
        <progress value={collected} max="5" className={styles.progressBar} />
        <div className={styles.map}>
          <Mapbox />
        </div>
        <Footer collected={collected} />
      </main>
    </>
  );
}
