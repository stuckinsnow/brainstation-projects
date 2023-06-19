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
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
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
      <ul className="filter-container">
        {photos.map((photo) => (
          <div key={photo.id} className={`filter-item ${photo.photo_region}`}>
            <Link to={`/photos/${photo.id}`}>
              <img src={getImageUrl(photo.filename)} alt={photo.filename} />
            </Link>

            <div className="exif-data">
              {photos.length > 0 && (
                <>
                  <p>GPS:{' '} <Link to={`${googleA}${formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)},${formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer">{formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)}{' '}{formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}</Link></p>
                  <p>Date Taken: {photo.exif_data.exif.CreateDate}</p>
                  <p>Shutter Speed: {formatExposureTime(photo.exif_data.exif.ExposureTime)}s</p>
                  <p>Lens: {photo.exif_data.exif.LensModel}</p>
                  <p>Focal Length: {photo.exif_data.exif.FocalLength}mm</p>
                  <p>Aperture: f/{photo.exif_data.exif.FNumber}</p>
                  <p>ISO: {photo.exif_data.exif.ISO}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default MyIsotope;
