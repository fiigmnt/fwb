/**----------------------------------------------------------------------------------
 * MAP COMPONENT
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated: August 2, 2023
 * ----------------------------------------------------------------------------------*/

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Map, { Marker } from "react-map-gl";
import styles from "./Map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { parseCookies } from "nookies";

interface ItemMarkers {
  name: string;
  coords: [number, number];
}

const Mapbox: React.FC = () => {
  const cookies = parseCookies();

  return (
    <div className={styles.mapContainer}>
      <Map
        initialViewState={{
          longitude: -116.74464791894185,
          latitude: 33.73332674454589,
          zoom: 15,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        mapStyle="mapbox://styles/fiigmnt/cl4evbfs6001q14lqhwnmjo11"
      >
        {itemMarkers.map((item) => {
          const hasCollected = item.name in cookies;
          return (
            <div key={item.name}>
              <Link href={`/${item.name}`}>
                <Marker
                  longitude={item.coords[0]}
                  latitude={item.coords[1]}
                  anchor="bottom"
                >
                  {hasCollected ? (
                    <Image
                      alt="map point"
                      src={`/posters/${item.name}.webp`}
                      id={item.name}
                      width={80}
                      height={80}
                    />
                  ) : (
                    <Image
                      alt="map point"
                      src="/images/mapMarker.svg"
                      id={item.name}
                      width={40}
                      height={40}
                    />
                  )}
                </Marker>
              </Link>
            </div>
          );
        })}
      </Map>
    </div>
  );
};

export default Mapbox;

const itemMarkers: ItemMarkers[] = [
  {
    name: "checkered",
    coords: [-116.745376, 33.733717],
  },
  {
    name: "crayon",
    coords: [-116.742735, 33.733404],
  },
  {
    name: "cubism",
    coords: [-116.746515, 33.733527],
  },
  {
    name: "golden",
    coords: [-116.747576, 33.73133],
  },
  {
    name: "light",
    coords: [-116.746389, 33.73086],
  },
];
