"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseCookies } from "nookies";
import axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";
import Item from "@/components/Item";
import { useRouter } from "next/navigation";

export default function ARPage({ params }: { params: { name: string } }) {
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const router = useRouter();

  const cookies = parseCookies();
  let userId = cookies.userId;

  const itemName = params.name;

  useEffect(() => {
    router.prefetch(`/${itemName}?collected`);
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

  // useEffect(() => {
  //   if (displayContent) {
  //     router.push(`/${itemName}?collected`);
  //     router.refresh();
  //   }
  // }, [displayContent, itemName, router]);

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
          <Item name={params.name} />
        </div>
      )}
    </>
  );
}
