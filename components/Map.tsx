/**----------------------------------------------------------------------------------
 * The mapbox setup for viewing piece locations
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

"use client"; // This is a client component
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Map.module.css";

// TODO: move private key to .env
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || "";

// function dmsString(deg: number, lng: boolean): string {
//   var d = parseInt(deg.toString());
//   var minfloat = Math.abs((deg - d) * 60);
//   var m = Math.floor(minfloat);
//   var secfloat = (minfloat - m) * 60;
//   var s = Math.round((secfloat + Number.EPSILON) * 100) / 100;
//   d = Math.abs(d);

//   if (s == 60) {
//     m++;
//     s = 0;
//   }
//   if (m == 60) {
//     d++;
//     m = 0;
//   }

//   let dms = {
//     dir: deg < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
//     deg: d,
//     min: m,
//     sec: s.toFixed(0),
//   };
//   return `${dms.deg}\u00B0${dms.min}'${dms.sec}"${dms.dir}`;
// }

interface ItemMarkers {
  id: string;
  coords: [number, number];
}

const mapCenter: [number, number] = [-116.74464791894185, 33.73332674454589];

const Mapbox: React.FC = () => {
  const router = useRouter();
  const [zoom, setZoom] = useState(16);

  const mapboxContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker[]>([]);

  const initializeMap = () => {
    if (mapboxContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapboxContainer.current,
        style: "mapbox://styles/fiigmnt/cl4evbfs6001q14lqhwnmjo11",
        center: mapCenter,
        zoom: zoom,
      });

      // Initialize array to store marker refs
      // TODO: clean this up to use forEach and use a custom typed object array
      // TODO: move this to a separate function
      const markers = [];

      const itemMarkers: ItemMarkers[] = [
        {
          id: "astronaut",
          coords: [-116.74741596444821, 33.73347843005718],
        },
        {
          id: "space",
          coords: [-116.74397193363674, 33.734433026377026],
        },
        {
          id: "apple",
          coords: [-116.74609632103731, 33.732443441000726],
        },
        {
          id: "tv",
          coords: [-116.74487323544595, 33.732871703977125],
        },
      ];

      // Create each marker
      for (let i = 0; i < itemMarkers.length; i++) {
        // TODO: move this to a function
        const markerHtml = document.createElement("div");
        markerHtml.style.width = "40px";
        markerHtml.style.height = "40px";
        markerHtml.style.display = "flex";
        markerHtml.style.justifyContent = "center";
        markerHtml.style.alignItems = "center";
        // markerHtml.style.border = "2px solid #fff";
        markerHtml.innerHTML = `<img src="/images/mapMarker.svg" id="${itemMarkers[i].id}" />`;

        const newMarker = new mapboxgl.Marker(markerHtml)
          .setLngLat(itemMarkers[i].coords)
          .addTo(map.current);

        newMarker.getElement().addEventListener("click", (e) => {
          const element = e.target as HTMLElement; // Type cast to HTMLElement
          console.log(`Marker ${element.id} clicked!`);

          router.push(`/${element.id}`);
        });

        // Store the marker ref
        markers.push(newMarker);
      }

      // Update the marker ref to the array of markers
      marker.current = markers;
    }
  };

  useEffect(() => {
    if (!map.current) initializeMap(); // initialize map only if map.current is null
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(`${mirage.latitude}, ${mirage.longitude}`);
  //   snackbar.showMessage("location copied to clipboard");
  // };

  return (
    <div className={styles.mapContainer}>
      <div ref={mapboxContainer} className={styles.mapboxContainer}></div>
    </div>
  );
};

export default Mapbox;
