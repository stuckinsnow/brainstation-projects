import { Link } from "react-router-dom";
import { getImageUrl, formatExposureTime, formatGpsData } from "../../utils/functions";

// Icons
import gpsIcon from '../../assets/images/location.svg';
import magnifyIcon from '../../assets/images/zoom.svg';

function MyIsotope({ isToggled, photos, googleA, handleModalClick }) {
  return (
    <>
      <div className={`isotope ${isToggled ? 'toggled-on' : ''}`}>
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
                    <p className='iso-exif__writing--icons'>
                      <Link className='iso-exif__writing--gps' to={`${googleA}${encodeURIComponent(formatGpsData(photo.exif_data.gps?.GPSLatitude, photo.exif_data.gps?.GPSLatitudeRef))},${encodeURIComponent(formatGpsData(photo.exif_data.gps?.GPSLongitude, photo.exif_data.gps?.GPSLongitudeRef))}`} target="_blank" rel="noopener noreferrer">
                        <img src={gpsIcon} alt="GPS Icon" />
                      </Link>
                      <Link to={getImageUrl(photo.filename)} onClick={(e) => {
                        e.preventDefault();
                        handleModalClick(getImageUrl(photo.filename));
                      }}>
                        <img src={magnifyIcon} alt="Magnify Icon" />
                      </Link>
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Date Taken: </span>
                      {photo.exif_data.exif?.CreateDate}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Camera: </span>
                      {photo.exif_data.image?.Model}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Software: </span>
                      {photo.exif_data.image?.Software}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Lens: </span>
                      {photo.exif_data.exif?.LensModel}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Focal Length: </span>
                      {photo.exif_data.exif?.FocalLength}mm
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Shutter Speed: </span>
                      {formatExposureTime(photo.exif_data.exif?.ExposureTime)}s
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>Aperture: </span>
                      f/{photo.exif_data.exif?.FNumber}
                    </p>
                    <p>
                      <span className='iso-exif__writing--category'>ISO: </span>
                      {photo.exif_data.exif?.ISO}
                    </p>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default MyIsotope;
