import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import Isotope from 'isotope-layout';
import './MyIsotope.scss';
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";

function MyIsotope() {

  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  // const [activePhoto] = useState(0);
  // const pds = photos[activePhoto]?.exif_data.gps;
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  const initializeIsotope = () => {
    isotope.current = new Isotope('.isotope', {
      itemSelector: '.isotope__card',
      layoutMode: 'fitRows',
    });
  };

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/photos/`);
      const data = await response.json();

      setPhotos(data);

      if (isotope.current) {
        isotope.current.reloadItems();
        isotope.current.arrange();
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    initializeIsotope();
    fetchPhotos();
  }, []);

  useEffect(() => {
    if (filterKey === '*') {
      isotope.current.arrange({ filter: '*' });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <ul>
        <li onClick={() => handleFilterKeyChange('*')}>Show Both</li>
        <li onClick={() => handleFilterKeyChange('Europe')}>England</li>
        <li onClick={() => handleFilterKeyChange('NorthAmerica')}>North America</li>
      </ul>

      <section className="isotope">
        <h1 className='isotope__title'>Photo Gallery</h1>
        {photos.map((photo, index) => (
          <article key={photo.id} className={`isotope__card ${photo.photo_region.replace(/\s/g, '')}`}>
            <Link
              to={getImageUrl(photo.filename)}
              onClick={(event) => {
                event.preventDefault();
                // LIGHTBOX CODE HERE
              }}
            >
              <img src={getImageUrl(photo.filename)} alt={photo.filename} />
            </Link>

            <div className="iso-exif">
              {photos.length > 0 && (
                <>
                  <h2 className='iso-exif__title'>
                    <Link to={`/photos/${photo.id}`}>
                      {photo.photo_name}
                    </Link>
                  </h2>
                  <div className='iso-exif__writing'>
                    <p><span className='iso-exif__writing--category'>GPS: </span>
                      <Link id='gpsstuff' className='iso-exif__writing--gps' to={`${googleA}${formatGpsData(photo.exif_data.gps?.GPSLatitude, photo.exif_data.gps?.GPSLatitudeRef)},${formatGpsData(photo.exif_data.gps?.GPSLongitude, photo.exif_data.gps?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer">GPS</Link>
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Date Taken: </span>
                      {photo.exif_data.exif.CreateDate}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Shutter Speed: </span>
                      {formatExposureTime(photo.exif_data.exif.ExposureTime)}s
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Camera: </span>
                      {photo.exif_data.image.Model}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Lens: </span>
                      {photo.exif_data.exif.LensModel}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Software: </span>
                      {photo.exif_data.image.Software}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Focal Length: </span>
                      {photo.exif_data.exif.FocalLength}mm
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Aperture: </span>
                      f/{photo.exif_data.exif.FNumber}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>ISO: </span>
                      {photo.exif_data.exif.ISO}
                    </p>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </section>

    </>
  );
}

export default MyIsotope;
