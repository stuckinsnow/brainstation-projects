import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { getImageUrl } from "../../utils/functions";
import "./Carousel.scss";

function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(activeSlide);

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

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };


  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="swiper"
        onSlideChange={handleSlideChange}
        slidesPerView='1'
        spaceBetween={1}
        speed={500}
        loop={true}
      >
        {photos.map((photo) => (
          <SwiperSlide className="swiper__slide" key={photo.id}>
            <img src={getImageUrl(photo.filename)} alt={photo.filename} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;