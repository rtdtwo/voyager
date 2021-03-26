import React from 'react';
import { useStore } from 'react-context-hook';

import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import Leaflet from 'leaflet'

import * as helpers from '@turf/helpers';
import { default as bezierSpline } from '@turf/bezier-spline';

import { getMidpoint } from '../utils/Utils';

let leafletMap = null;

const Map = (props) => {
    const [itinerary] = useStore('itinerary');
    const [theme] = useStore('theme');
    const [home] = useStore('home');
    const [selectedDestination] = useStore('selectedDestination');

    const homeMarkerIcon = new Leaflet.Icon({
        iconUrl: theme.homeMarker,
        iconSize: [20, 20], // size of the icon
        iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -10]// point from which the popup should open relative to the iconAnchor
    });

    const homeMarker = () => {
        if (home !== null && home !== undefined) {
            return <Marker position={[home.latitude, home.longitude]} icon={homeMarkerIcon}>
                <Popup>
                    <p className="p-0 m-0 regular-text poppins"><b>HOME</b></p>
                </Popup>
            </Marker>
        }
    }

    const markerIcon = new Leaflet.Icon({
        iconUrl: theme.marker,
        iconSize: [15, 15], // size of the icon
        iconAnchor: [7.5, 7.5], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -7.5]// point from which the popup should open relative to the iconAnchor
    })

    const markDestinations = () => {
        return itinerary.map(item => {
            const lat = item.latitude;
            const lon = item.longitude;
            return <Marker position={[lat, lon]} key={item.icao} icon={markerIcon}>
                <Popup>
                    <div>
                        <p className="p-0 m-0 regular-text poppins"><b>{item.city.toUpperCase()}</b></p>
                        <p className="p-0 m-0 small-text poppins">{item.country.toUpperCase()}</p>
                    </div>
                </Popup>
            </Marker>
        })
    }

    const drawAirplanePaths = () => {
        return itinerary.map(item => {
            const currentLatLon = [item.longitude, item.latitude];
            const nextLatLon = [home.longitude, home.latitude];
            const midLatLng = getMidpoint(currentLatLon, nextLatLon);

            const line = helpers.lineString(
                [
                    currentLatLon,
                    midLatLng,
                    nextLatLon,
                ].map(lngLat => [lngLat[0], lngLat[1]])
            );

            const curved = bezierSpline(line);

            const lineStyle = {
                color: '#9a9a9a',
                weight: 2,
                opacity: .7,
                dashArray: '5,5',
                lineJoin: 'round'
            }

            return <GeoJSON data={curved} style={lineStyle} key={currentLatLon} />
        })
    }

    const southWest = Leaflet.latLng(-90, -180);
    const northEast = Leaflet.latLng(90, 180);
    const bounds = Leaflet.latLngBounds(southWest, northEast);

    const centerPoint = selectedDestination !== null ? [selectedDestination.latitude, selectedDestination.longitude] : [0, 0]
    const zoom = selectedDestination !== null ? 4 : 2;
    leafletMap?.setView(centerPoint, zoom);

    return (
        <MapContainer
            className={props.className}
            center={[0, 0]}
            maxBounds={bounds}
            whenCreated={map => { leafletMap = map }}
            zoom={2}
            minZoom={2}
            zoomControl={false}>
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png" />
            {drawAirplanePaths()}
            {markDestinations()}
            {homeMarker()}
        </MapContainer>
    )
};

export default Map;