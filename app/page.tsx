/**----------------------------------------------------------------------------------
 * The Display card for the contract page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/
"use client";
import React from "react";
import Mapbox from "../components/Map";
import { v4 as uuidv4 } from "uuid";
import { parseCookies, setCookie } from "nookies";
import axios from "axios";
import styles from "./page.module.css";

import Header from "../components/Header";

export default function Home() {
  const cookies = parseCookies();
  let userId = cookies.userId;
  console.log(userId);

  // If user ID is not present in cookies, create a new one
  if (!userId) {
    userId = uuidv4();
    setCookie(null, "userId", userId, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    // create user
    axios.post(`/api/createUser`, {
      userId,
    });
  }

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
