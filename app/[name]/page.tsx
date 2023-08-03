/**----------------------------------------------------------------------------------
 * Item Page
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

// "use client"; // This is a client component
import React from "react";
import { cookies } from "next/headers";
import Item from "../../components/Item";

export default function Page({ params }: { params: { name: string } }) {
  const cookieStore = cookies();
  const collected = !!cookieStore.get(params.name);
  return <Item name={params.name} collected={collected} />;
}
