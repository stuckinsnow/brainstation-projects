import Fraction from "fraction.js";

export const getImageUrl = (filename) => {
  const serverBaseUrl = process.env.REACT_APP_API_URL;
  return `${serverBaseUrl}/uploads/${filename}`;
};

export const formatExposureTime = (exposureTime) => {
  const fraction = new Fraction(exposureTime).toFraction();
  return fraction;
};

// export const formatGpsData = (latitude, longitude) => {
//   const latitudeDegrees = latitude[0];
//   const latitudeMinutes = latitude[1];
//   const latitudeSeconds = latitude[2];
//   const latitudeFormatted = `${latitudeDegrees}° ${latitudeMinutes}' ${latitudeSeconds}"`;

//   const longitudeDegrees = longitude[0];
//   const longitudeMinutes = longitude[1];
//   const longitudeSeconds = longitude[2];
//   const longitudeFormatted = `${longitudeDegrees}° ${longitudeMinutes}' ${longitudeSeconds}"`;

//   return {
//     latitude: latitudeFormatted,
//     longitude: longitudeFormatted,
//   };
// };

export const formatGpsData = (gpsData, gpsRef) => {
  if (Array.isArray(gpsData) && gpsData.length === 3 && gpsRef) {
    const degrees = gpsData[0];
    const minutes = gpsData[1] + gpsData[2] / 60;
    return `${degrees} ${minutes.toFixed(4)}' ${gpsRef}`;
  } else {
    return '';
  }
};

