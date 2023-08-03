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

const items = ["checkered", "crayon", "cubism", "golden", "light"];

const Item: React.FC<ItemProps> = ({ name, collected }) => {
  const itemPosition = items.indexOf(name) + 1;

  function getName(name: string) {
    switch (name) {
      case "checkered":
        return "X Æ A-Xii";
      case "crayon":
        return "Pool Poppers";
      case "cubism":
        return "Braque Cocks";
      case "golden":
        return "Groupiez";
      case "light":
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
          <div className={styles.backButton}>← {itemPosition}/6</div>
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
  checkered: `More than friends Can't possibly forget your red flaming lips from then on I was obsessed with you and i felt it deep beautiful`,
  crayon: `More than friends Can't possibly forget your red flaming lips from then on I was obsessed with you and i felt it deep beautiful`,
  cubism: `More than friends Can't possibly forget your red flaming lips from then on I was obsessed with you and i felt it deep beautiful`,
  golden: `More than friends Can't possibly forget your red flaming lips from then on I was obsessed with you and i felt it deep beautiful`,
  light: `More than friends Can't possibly forget your red flaming lips from then on I was obsessed with you and i felt it deep beautiful`,
};
