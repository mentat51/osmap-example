import React, { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import visitorIcon from "./constants";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css'
import "./Marker.css"
const markersExamples = [
    { latitude: 49.0200, longitude: 4.0297, message: "Position 1" },
    { latitude: 49.0297, longitude: 4.0000, message: "Position 2" },
    { latitude: 49.0257, longitude: 4.0019, message: "Position 3" }
]

export default function Markers() {
    const [markers, setMarkers] = React.useState([]);

    useEffect(() => {
        setMarkers(markersExamples)
    }, [])

    return (
        <MarkerClusterGroup className="MarkerCluster">
            {markers.map(marker =>
                <Marker position={[marker.latitude, marker.longitude]} icon={visitorIcon}>
                    <Popup>{marker.message}</Popup>
                </Marker>
            )}
        </MarkerClusterGroup>
    );
}