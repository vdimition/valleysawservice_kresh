import React, { type FC, useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { addressCords } from '../../../config'

export const MarkerIcon: React.FC<unknown> = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="56"
        fill=""
        viewBox="0 0 24 24"
        stroke="#006eff"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
    </svg>
)

const marker = { id: 'france', ...addressCords }

export const Map: FC = () => {
  const [viewport, setViewport] = useState({ ...addressCords, zoom: 16 })

  return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="320px"
            onViewportChange={setViewport}
            scrollZoom={{ speed: 1, smooth: true }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
        >
            <Marker {...marker} offsetLeft={-17.5} offsetTop={-38}>
                <MarkerIcon/>
            </Marker>
        </ReactMapGL>
  )
}
