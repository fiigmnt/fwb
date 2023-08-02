/**----------------------------------------------------------------------------------
 * Item view
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

"use client"; // This is a client component
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { parseCookies } from "nookies";
import axios from "axios";
import styles from "./Item.module.css";

import dynamic from "next/dynamic";
import Header from "./Header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ModelViewer = dynamic(() => import("./model/ModelViewer"), {
  ssr: false,
});

interface ItemProps {
  name: string;
}

const Item: React.FC<ItemProps> = ({ name }) => {
  const cookies = parseCookies();
  const searchParams = useSearchParams();
  let userId = cookies.userId;

  const [hasCollected, setHasCollected] = useState(false);

  useEffect(() => {
    const hasCollectedItem = async (
      userId: string,
      name: string
    ): Promise<void> => {
      const response = await axios.post(`/api/hasCollected`, {
        userId,
        itemName: name,
      });

      setHasCollected(response.data?.result);
    };

    if (searchParams?.has("collected")) {
      console.log('here')
      setHasCollected(true);
    } else {
      hasCollectedItem(userId, name);
    }

    // Calculate and update the --vh css variable
    const calculateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    calculateVh();
    window.addEventListener("resize", calculateVh);
    return () => window.removeEventListener("resize", calculateVh);
  }, [name, userId]);

  return (
    <>
      <Header />
      <div className={styles.itemContainer}>
        <div className={styles.modelContainer}>
          <ModelViewer name={name} />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>{itemInfo[name]}</div>
      </div>
      <div className={styles.openInAr}>
        <a id="ar-link" rel="ar" href={`/models/${name}.usdz`}>
          OPEN IN AR
          <Image
            alt="open in ar"
            src={"/images/black.png"}
            width={1}
            height={1}
          />
        </a>
      </div>
      <div className={styles.back}>
        <Link href="/">
          <Image
            src="/images/globe.svg"
            alt="go back to map"
            width={40}
            height={40}
          />
        </Link>
      </div>
      /
      <div
        id={styles.modelBlur}
        style={hasCollected ? { opacity: 0, visibility: "hidden" } : {}}
      />
    </>
  );
};

export default Item;

interface ItemInfo {
  [id: string]: string;
}

const itemInfo: ItemInfo = {
  checkered: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
  crayon: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
  cubism: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
  diamonds: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
  golden: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
  light: `More than friends
    Can't possibly forget
    your red
    flaming lips
    from then on I was obsessed
    with you
    and i felt it deep
    beautiful memories
    heavenly like stars
    you light up this light
    in me
    in the dark nighttime
    can't possibly forget
    the passionate kissing
    i'm attached`,
};
