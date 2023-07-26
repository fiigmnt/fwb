/**----------------------------------------------------------------------------------
 * Mirage Information Page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Item from "../../components/Item";

// TODO: move this to data file
const names = ["checkered", "crayon", "cubism", "diamonds", "golden", "light"];

export default function Page({ params }: { params: { name: string } }) {
  return (
    <>
      {names.includes(params.name) ? (
        <Item name={params.name} />
      ) : (
        // TODO: create 404 page
        <h1>404: 💀</h1>
      )}
    </>
  );
}
