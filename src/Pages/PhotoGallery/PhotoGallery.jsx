import { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import '../../Components/MyIsotope/MyIsotope.scss';
import PhotoModal from '../../Components/PhotoModal/PhotoModal';
import MyIsotope from '../../Components/MyIsotope/MyIsotope';
import './PhotoGallery.scss';

import cameraIcon from '../../assets/images/camera.svg';

// https://www.svgrepo.com/page/licensing#MIT


function PhotoGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const googleA = 'https://www.google.com/maps/search/?api=1&query=';

  const initializeIsotope = () => {
    isotope.current = new Isotope('.isotope', {
      itemSelector: '.isotope__card',
      layoutMode: 'fitRows',
    });

    setTimeout(() => {
      isotope.current.shuffle();
    }, 1000);
  };

  useEffect(() => {
    initializeIsotope();
    fetchPhotos();
  }, []);

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

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleModalClick = (imageFileName) => {
    setCurrentImage(imageFileName);
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <section className='photo-gallery'>


        <div className={`toggle-btn ${isToggled ? 'toggle-btn--toggled' : ''}`} onClick={handleToggle}>
          <img className="camera-icon" src={cameraIcon} alt='camera' />
        </div>

        <ul className={`iso-buttons ${isToggled ? 'iso-buttons--toggled' : ''}`}>
          <li className={`iso-buttons--all ${filterKey === '*' ? 'active-filter' : ''}`} onClick={() => handleFilterKeyChange('*')}>
            All
          </li>
          <li className={`iso-buttons--europe ${filterKey === 'Europe' ? 'active-filter' : ''}`} onClick={() => handleFilterKeyChange('Europe')}>
            England
          </li>
          <li className={`iso-buttons--northamerica ${filterKey === 'NorthAmerica' ? 'active-filter' : ''}`} onClick={() => handleFilterKeyChange('NorthAmerica')}>
            North America
          </li>
          <li onClick={() => isotope.current.shuffle()}>Shuffle</li>
        </ul>

        <PhotoModal modalOpen={modalOpen} currentImage={currentImage} handleModalClick={handleModalClick} />

        <MyIsotope isToggled={isToggled} photos={photos} googleA={googleA} handleModalClick={handleModalClick} />

      </section>


    </>
  );
}

export default PhotoGallery;
