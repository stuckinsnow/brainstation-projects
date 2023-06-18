import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";
import { Navigation } from "swiper";
import Fraction from "fraction.js";

function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/photos/`);
      const data = await response.json();

      setPhotos(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Construct the image URL based on the server's URL and image filename
  const getImageUrl = (filename) => {
    const serverBaseUrl = process.env.REACT_APP_API_URL;
    return `${serverBaseUrl}/uploads/${filename}`;
  };

  const formatExposureTime = (exposureTime) => {
    const fraction = new Fraction(exposureTime).toFraction();
    return fraction;
  };

  return (
    <>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}> */}
      {photos.map((photo) => (
        // <SwiperSlide key={photo.id}>
        <div>
          <img src={getImageUrl(photo.filename)} alt={photo.filename} />
          <div>
            <p>Latitude: {photo.exif_data.gps?.GPSLatitude}</p>
            <p>Longitude: {photo.exif_data.gps?.GPSLongitude}</p>
            <p>Date Taken: {photo.exif_data.exif.CreateDate}</p>
            <p>SS: {formatExposureTime(photo.exif_data.exif.ExposureTime)}s</p>
            <p>Lens: {photo.exif_data.exif.LensModel}</p>
            <p>Focal Length: {photo.exif_data.exif.FocalLength}mm</p>
            <p>Aperture: f/{photo.exif_data.exif.FNumber}</p>
            <p>ISO: {photo.exif_data.exif.ISO}</p>
          </div>
        </div>
        // </SwiperSlide>
      ))}
      {/* </Swiper> */}
    </>
  );
}

export default Carousel;
