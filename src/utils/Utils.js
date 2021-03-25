const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
}

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

export const getMidpoint = (latlng1, latlng2) => {
    const offsetX = latlng2[1] - latlng1[1]
    const offsetY = latlng2[0] - latlng1[0];

    const r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2))
    const theta = Math.atan2(offsetY, offsetX);

    const thetaOffset = (3.14 / 10);

    const r2 = (r / 2) / (Math.cos(thetaOffset)),
        theta2 = theta + thetaOffset;

    const midpointX = (r2 * Math.cos(theta2)) + latlng1[1];
    const midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

    return [midpointY, midpointX];
}