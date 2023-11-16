import React, {FC} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

export const MarkerIcon: React.FC<unknown> = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="56"
        fill=""
        viewBox="0 0 24 24"
        stroke="#3eb8db"
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
);

const markers = [
    {
        id: "tenerife-1",
        latitude: 28.481174533178944,
        longitude: -16.318345483015758
    },
    {
        id: "tenerife-2",
        latitude: 28.352557291487383,
        longitude: -16.745886630143065
    },
    {
        id: "london",
        latitude: 51.52167056034225,
        longitude: -0.12894469488176763
    },
    {id: "france", latitude: 46.58635156377568, longitude: 2.1796793230151184}
];

export const Map: FC = () => {
    return (
        <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={'pk.eyJ1Ijoidml0YWxpZXZpY2hrcmVzaCIsImEiOiJjbHAxNnFwbG8wZjQzMmpwYnA0bzZxYnEyIn0.VS6lKQlMIBNaT0L53y1YZw'}
            height={320}
            width={'100%'} zoom={3} latitude={46.58635156377568} longitude={2.1796793230151184}
        >
            <>
                {markers.map(({ id, ...marker }) => (
                    <Marker key={id} {...marker} offsetLeft={-17.5} offsetTop={-38}>
                        <MarkerIcon />
                    </Marker>
                ))}
            </>
        </ReactMapGL>
    );
};

