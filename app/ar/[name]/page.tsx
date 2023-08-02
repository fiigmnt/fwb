"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseCookies } from "nookies";
import axios from "axios";
import Item from "../../../components/Item";

export default function ARPage({ params }: { params: { name: string } }) {

  const cookies = parseCookies();
  let userId = cookies.userId;

  const itemName = params.name;

  useEffect(() => {
    axios.post(`/api/collectItem`, {
      userId,
      itemName,
    });

    setTimeout(() => {
      document.getElementById("ar-link")?.click();
    }, 10);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Item name={params.name} collected />
      </div>
      {false && (
        <div style={{ marginTop: "-20px" }}>
          <a id="ar-link" rel="ar" href={`/models/${itemName}.usdz`}>
            <Image
              alt="open in ar"
              src={"/images/black.png"}
              width={1}
              height={1}
            />
          </a>
        </div>
      )}
    </>
  );
}
