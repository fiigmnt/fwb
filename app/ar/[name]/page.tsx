"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseCookies } from "nookies";
import axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";

export default function ARPage({ params }: { params: { name: string } }) {
  const [displayContent, setDisplayContent] = useState<boolean>(false);

  const cookies = parseCookies();
  let userId = cookies.userId;

  const itemName = params.name;

  useEffect(() => {
    axios.post(`/api/collectItem`, {
      userId,
      itemName,
    });

    console.log(`Collected ${itemName}`);

    setTimeout(() => {
      document.getElementById("ar-link")?.click();
    }, 10);

    setTimeout(() => {
      setDisplayContent(true);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
      {displayContent && (
        <div>
          <Header />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "80vh",
            }}
          >
            <Link href={`/${itemName}`}>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1 style={{ marginBottom: "10px" }}>ITEM COLLECTED</h1>
                <h3 style={{textDecoration: "underline"}}>
                  view item page{" "}
                  <span style={{ fontSize: "1em", fontStyle: "normal" }}>
                    ↠
                  </span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
