import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";

const PhotoPage = ({ history }) => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const url = `${process.env.REACT_APP_API_URL}${pathname}`;

    fetch(url)
      .then(response => response.json())
      .then(data => setPhotoData(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = () => {
    if (photoData && photoData.id) {
      const idToDelete = photoData.id;
      const currentDomain = window.location.origin;
      window.location.href = `${currentDomain}/deletePage`;
      axios
        .delete(`${process.env.REACT_APP_API_URL}/delete/${idToDelete}`)
        .then((response) => {
          console.log("File successfully deleted");
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const pds = photoData?.exif_data.gps;
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  return (

    <>

      {photoData ? (
        <div>
          {/* <pre>{JSON.stringify(photoData, null, 2)}</pre> */}

          <img src={getImageUrl(photoData.filename)} alt={photoData.filename} />

          <div>
            <h2>Photo Information:</h2>
            <div>
              <strong>Photo Name:</strong> {photoData.photo_name}
            </div>
            <hr />
            <h2>EXIF Data:</h2>

            <div className="exif-data">
              <p>
                GPS:
                <Link to={`${googleA}${formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)},${formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}`} target="_blank" rel="noopener noreferrer" > {formatGpsData(pds?.GPSLatitude, pds?.GPSLatitudeRef)} {formatGpsData(pds?.GPSLongitude, pds?.GPSLongitudeRef)}</Link>
              </p>
              <p>Date Taken: {photoData.exif_data.exif?.CreateDate}</p>
              <p>Shutter Speed: {formatExposureTime(photoData.exif_data.exif.ExposureTime)}s</p>
              <p>Lens: {photoData.exif_data.exif.LensModel}</p>
              <p>Focal Length: {photoData.exif_data.exif.FocalLength}mm</p>
              <p>Aperture: f/{photoData.exif_data.exif.FNumber}</p>
              <p>ISO: {photoData.exif_data.exif.ISO}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div>
        {photoData && (
          <button onClick={handleDelete}>Delete</button>
        )}
      </div>
    </>
  );
};

export default PhotoPage;
