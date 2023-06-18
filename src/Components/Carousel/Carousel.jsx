import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";
import { Navigation } from "swiper";
import axios from 'axios';

function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/photos/`)
      .then((response) => {
        const fetchedPhotos = response.data;
        setPhotos(fetchedPhotos);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
                  <img src={`/assets/photos/${photo.image}`} alt={photo.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
