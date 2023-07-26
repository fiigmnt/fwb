/**----------------------------------------------------------------------------------
 * Mirage Information Page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/


import React from "react";
import Item from "../../components/Item";

// TODO: move this to data file
const availableItems = ["birds-checker", "birds-color", "birds-cube", "birds-gold", "birds-pink+blue", "birds-square"];

export default function Page({ params }: { params: { name: string } }) {

  return (
    <>
      {availableItems.includes(params.name) ? (
        <Item name={params.name} />
      ) : (
        // TODO: create 404 page
        <h1>404: 💀</h1>
      )}
    </>
  );
}
