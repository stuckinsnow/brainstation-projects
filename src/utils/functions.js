import Fraction from "fraction.js";

export const getImageUrl = (filename) => {
  const serverBaseUrl = process.env.REACT_APP_API_URL;
  return `${serverBaseUrl}/uploads/${filename}`;
};

export const formatExposureTime = (exposureTime) => {
  const fraction = new Fraction(exposureTime).toFraction();
  return fraction;
};
