import Fraction from "fraction.js";
import { useEffect } from "react";

export const getImageUrl = (filename) => {
  const serverBaseUrl = process.env.REACT_APP_API_URL;
  return `${serverBaseUrl}/uploads/${filename}`;
};

export const formatExposureTime = (exposureTime) => {
  const fraction = new Fraction(exposureTime).toFraction();
  return fraction;
};

export const formatGpsData = (gpsData, gpsRef) => {
  if (Array.isArray(gpsData) && gpsData.length === 3 && gpsRef) {
    const degrees = gpsData[0];
    const minutes = gpsData[1] + gpsData[2] / 60;
    return `${degrees} ${minutes.toFixed(4)}' ${gpsRef}`;
  } else {
    return '';
  }
};

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};