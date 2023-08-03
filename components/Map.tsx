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
          zoom: 16,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        mapStyle="mapbox://styles/privet-poka/clks0f6sy00qt01pc4xq1g2dv"
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
                      width={60}
                      height={60}
                    />
                  ) : (
                    <Image
                      alt="map point"
                      src="/images/mapMarker.svg"
                      id={item.name}
                      width={30}
                      height={30}
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
    coords: [-116.74397193363674, 33.734433026377026],
  },
  {
    name: "crayon",
    coords: [-116.74491609475825, 33.734665075766856],
  },
  {
    name: "cubism",
    coords: [-116.74609632103731, 33.732443441000726],
  },
  {
    name: "golden",
    coords: [-116.7487999800392, 33.7338085743863],
  },
  {
    name: "light",
    coords: [-116.74461575848511, 33.73296980821643],
  },
];
