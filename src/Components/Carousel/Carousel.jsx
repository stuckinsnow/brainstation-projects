import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";
import "./Carousel.scss";

function Carousel() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
        slidesPerView='auto' 
        spaceBetween={6} 
        loop={true} 
      >
        {photos.map((photo) => (
          <SwiperSlide className="swiper__slide" key={photo.id}>
            <Link to={`/photos/${photos[activeSlide].id}`}>
              <img src={getImageUrl(photo.filename)} alt={photo.filename} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        {photos.length > 0 && <SlideDetails photo={photos[activeSlide]} />}
      </div>
    </>
  );
}

function SlideDetails({ photo }) {

  const pds = photo?.exif_data.gps;
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  return (
    <div className="exif-data">
      <p>
        GPS: <Link to={`${googleA}${formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)},${formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer">{formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)} {formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}</Link>
      </p>
      <p>Date Taken: {photo.exif_data.exif.CreateDate}</p>
      <p>Shutter Speed: {formatExposureTime(photo.exif_data.exif.ExposureTime)}s</p>
      <p>Lens: {photo.exif_data.exif.LensModel}</p>
      <p>Focal Length: {photo.exif_data.exif.FocalLength}mm</p>
      <p>Aperture: f/{photo.exif_data.exif.FNumber}</p>
      <p>ISO: {photo.exif_data.exif.ISO}</p>
    </div>
  );
}

export default Carousel;
