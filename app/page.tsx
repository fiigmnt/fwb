/**----------------------------------------------------------------------------------
 * Main page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

"use client";
import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Mapbox from "../components/Map";

import styles from "./page.module.css";

const names = ['checkered', 'crayon', 'cubism', 'checkered', 'light'];

export default function Home() {
  console.log('here')
  return (
    <>
    <Head>
    {names.map((name) => (
          <>
            <link key={name} rel="preload" href={`/models/${name}.glb`} as="model" />
            <link key={name} rel="preload" href={`/models/${name}.usdz`} as="model" />
          </>
        ))}
    </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.map}>
          <Mapbox />
        </div>
      </main>
    </>
  );
}
