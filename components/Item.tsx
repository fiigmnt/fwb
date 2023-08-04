/**----------------------------------------------------------------------------------
 * Item view
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

"use client"; // This is a client component
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Header from "./Header";

import styles from "./Item.module.css";

const ModelViewer = dynamic(() => import("./model/ModelViewer"), {
  ssr: false,
});

interface ItemProps {
  name: string;
  collected?: boolean;
}

const items = ["x", "poppers", "braque", "groupiez", "sluts"];

const Item: React.FC<ItemProps> = ({ name, collected }) => {
  const itemPosition = items.indexOf(name) + 1;

  function getName(name: string) {
    switch (name) {
      case "x":
        return "X Æ A-Xii";
      case "poppers":
        return "Pool Poppers";
      case "braque":
        return "Braque Cocks";
      case "groupiez":
        return "Groupiez";
      case "sluts":
        return "Candy Sluts";
      default:
        return "Unknown";
    }
  }
  return (
    <>
      <div className={styles.itemContainer}>
        <div className={styles.modelContainer}>
          <ModelViewer name={name} />
        </div>
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{getName(name)}</div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>{itemInfo[name]}</div>
        <div className={styles.openInAr}>
          <a id="ar-link" rel="ar" href={`/models/${name}.usdz`}>
            AR
            <Image
              alt="open in ar"
              src={"/images/black.png"}
              width={1}
              height={1}
            />
          </a>
        </div>
      </div>
      <div className={styles.back}>
        <Link href="/">
          <div className={styles.backButton}>← {itemPosition}/5</div>
        </Link>
      </div>
      {!collected && <div className={styles.findMe}>COME FIND ME</div>}
      <div
        id={styles.modelBlur}
        style={collected ? { opacity: 0, visibility: "hidden" } : {}}
      />
    </>
  );
};

export default Item;

interface ItemInfo {
  [id: string]: string;
}

const itemInfo: ItemInfo = {
  x: `I mean it's just X, the letter X. And then the Æ is pronounced Ash and then A-12 is my contribution.`,
  poppers: `"GAY RIGHTS!" - Charli XCX`,
  braque: `"It is the unforeseeable that creates the event."`,
  groupiez: `I’m done sleeping with his best friend to get back at him. I’m leveling up. Like sleeping with his favorite artist and ruining that music for him forever. Where’s VIP? `,
  sluts: `You’re so cute it’s just the way you lost my elf bar threw me off a little.`,
};
