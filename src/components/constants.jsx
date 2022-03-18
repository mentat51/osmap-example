import L from "leaflet";
import blueImage from "leaflet/dist/images/marker-icon.png"
import shadow from "leaflet/dist/images/marker-shadow.png"
import redImage from "../assets/marker-icon-red22.png"

export const blueIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: blueImage,
  shadowUrl: shadow
});

export const redIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: redImage,
  shadowUrl: shadow
});