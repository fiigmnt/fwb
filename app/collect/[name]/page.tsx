/**----------------------------------------------------------------------------------
 * AR Item Page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import va from "@vercel/analytics";
import Item from "../../../components/Item";
import collect from "../../collect";

export default function ARPage({ params }: { params: { name: string } }) {
  const itemName = params.name;

  useEffect(() => {
    collect(itemName);

    // SHOW AR VIEW
    setTimeout(() => {
      document.getElementById("ar-link")?.click();
      va.track("Open AR", { name: itemName });
    }, 10);
  }, [itemName]);

  return (
    <>
      <div>
        <Item name={params.name} collected />
      </div>
      {/* HIDE AR LINK */}
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
