import { useState, useEffect } from 'react';
import './PhotoModal.scss';

import closeIcon from '../../assets/images/close.svg';

const PhotoModal = ({ currentImage, modalOpen, handleModalClick }) => {
  const [isOpenClassAdded, setIsOpenClassAdded] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (modalOpen && isRendered) {
      const timer = setTimeout(() => {
        setIsOpenClassAdded(true);
      }, 1);

      return () => clearTimeout(timer);
    } else {
      setIsOpenClassAdded(false);
    }

  }, [modalOpen, isRendered]);

  const handleCloseModal = () => {
    setIsOpenClassAdded(false);
    setTimeout(() => {
      handleModalClick();
    }, 500);
  };

  return (
    <>
      {modalOpen && isRendered && (
        <div id="lightbox" className={`lightbox ${isRendered && isOpenClassAdded ? 'lightbox--open' : 'lightbox--closed'}`}>
          <div className="lightbox__content">
            <img className="lightbox__content--image" src={currentImage} alt="Modal" />
            <div className='lightbox__content--subsection'>
              <img className="lightbox__content--close" src={closeIcon} onClick={handleCloseModal} alt="Close Icon" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoModal;
