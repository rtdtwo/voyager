import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = (props) => {
    return (
        <MapContainer
            className={props.className}
            center={[0, 0]}
            zoom={2}
            zoomControl={false}>
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png" />
            <Marker position={[0, 0]}>
                <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    )
};

export default Map;