import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";
import './PhotoPage.scss';
import { useDocumentTitle } from '../../utils/functions';

const PhotoPage = () => {
  const [photoData, setPhotoData] = useState('null');
  const pathName = window.location.pathname;
  // const url = `${process.env.REACT_APP_API_URL}${pathName}`;
  const navigate = useNavigate();

  useDocumentTitle('Portfolio - Photo ' + (photoData?.photo_name || 'Loading...'));


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/photos/`)
      .then(response => response.json())
      .then(data => setPhotoData(data))
      .catch(error => console.error(error));
  }, []);
  const handleDelete = () => {

    const idToDelete = photoData?.id;
    axios
      .delete(`${process.env.REACT_APP_API_URL}/delete/${idToDelete}`)
      .then((response) => {
        console.log("Entry successfully deleted");
        console.log(response.data);
        navigate("/photogallery");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const pds = photoData?.exif_data?.gps;
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  console.log(photoData);

  return (

    
    <>
      {photoData ? (
        <div className='delete-photo'>

          <img src={getImageUrl(photoData.filename)} alt={photoData.filename} />
          <div className='delete-photo__writing'>
            <h2 className='delete-photo__title'>Photo Information</h2>
            <div className='delete-photo__about'>
              <p>
                <strong>Name:</strong> {photoData.photo_name}
              </p>
              <p>
                <strong>Region:</strong> {photoData.photo_region}
              </p>
            </div>

            <h2 className='delete-photo__title delete-photo__title--margin'>EXIF Data</h2>
            <div className="delete-photo__exif-data">
              <p>
                GPS: <Link className="gps" to={`${googleA}${formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)},${formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer">{formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)} {formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}</Link>
              </p>
              <p>Date Taken: {photoData?.exif_data?.exif?.CreateDate}</p>
              <p>Lens: {photoData?.exif_data?.exif?.LensModel}</p>
              <p>Focal Length: {photoData?.exif_data?.exif?.FocalLength}mm</p>
              <p>Shutter Speed: {formatExposureTime(photoData?.exif_data?.exif?.ExposureTime)}s</p>
              <p>Aperture: f/{photoData?.exif_data?.exif?.FNumber}</p>
              <p>ISO: {photoData?.exif_data?.exif?.ISO}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="delete-function">
        {/* {photoData && (
          <div className='delete-function__btn btn' onClick={handleDelete}>Delete</div>
        )} */}
      </div>
    </>
  );
};

export default PhotoPage;
