/**----------------------------------------------------------------------------------
 * Item Page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Item from "../../components/Item";

export default function Page({ params }: { params: { name: string } }) {
  return <Item name={params.name} />;
}
