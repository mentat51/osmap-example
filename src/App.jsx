import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Markers from "./components/Markers";
import visitorIcon from "./constants";
import 'leaflet/dist/leaflet.css';
import "./App.css";

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function App() {
    function LocationMarker() {
        const [position, setPosition] = React.useState(null);

        const map = useMap();

        React.useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, 12); //map.getZoom());
            });
        }, []);

        return position === null ? null : (
            <Marker position={position} icon={visitorIcon}>
                <Popup>You are here</Popup>
            </Marker>
        );
    }

    return (
        <MapContainer className="markercluster-map" //whenCreated={map => setMap({ map })}
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Markers />
            <LocationMarker />
        </MapContainer>
    );
}