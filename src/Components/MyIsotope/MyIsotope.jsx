import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import './MyIsotope.scss';

import { Link } from "react-router-dom";
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";

function MyIsotope() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [activePhoto] = useState(0);

  useEffect(() => {
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

    fetchPhotos();
    initializeIsotope();

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

  const pds = photos[activePhoto]?.exif_data.gps;
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  return (
    <>
      <ul>
        <li onClick={() => handleFilterKeyChange('*')}>Show Both</li>
        <li onClick={() => handleFilterKeyChange('Europe')}>England</li>
        <li onClick={() => handleFilterKeyChange('NorthAmerica')}>North America</li>
      </ul>
      <hr />
      <section className="isotope">

        <h1 className='isotope__title'>Photo Gallery</h1>

        {photos.map((photo) => (
          <article key={photo.id} className={`isotope__card ${photo.photo_region.replace(/\s/g, '')}`}>
            <img src={getImageUrl(photo.filename)} alt={photo.filename} />


            <div className="iso-exif">
              {photos.length > 0 && (
                <>

                  <h2 className='iso-exif__title'>
                    <Link to={`/photos/${photo.id}`}>
                      {photo.photo_name}
                    </Link>
                  </h2>


                  <div className='iso-exif__writing'>

                  <p className='gps'>GPS:{' '} <Link to={`${googleA}${formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)},${formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer">{formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)}{' '}{formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}</Link></p>
                  <p>Date Taken: {photo.exif_data.exif.CreateDate}</p>
                  <p>Shutter Speed: {formatExposureTime(photo.exif_data.exif.ExposureTime)}s</p>
                  <p>Camera: {photo.exif_data.image.Model}</p>
                  <p>Lens: {photo.exif_data.exif.LensModel}</p>
                  <p>Software: {photo.exif_data.image.Software}</p>
                  <p>Focal Length: {photo.exif_data.exif.FocalLength}mm</p>
                  <p>Aperture: f/{photo.exif_data.exif.FNumber}</p>
                  <p>ISO: {photo.exif_data.exif.ISO}</p>

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
