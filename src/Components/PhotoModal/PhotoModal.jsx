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
            {/* <div onClick={handleCloseModal}> */}
              
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis provident, impedit, mollitia quam quia
                deleniti qui doloribus illo consectetur fugit iste, fuga eveniet voluptates obcaecati eius quaerat incidunt
                sit?
              </p>
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque maiores quod omnis hic ipsa
                tenetur, ducimus quis similique eos nobis. Facilis dicta voluptatum ad tempora, perferendis eaque expedita
                tenetur.
              </div> */}

              <img className="lightbox__content--image" src={currentImage} alt="" />
            {/* </div> */}
            <div className='lightbox__content--subsection'>
            <img className="lightbox__content--close" src={closeIcon} onClick={handleCloseModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoModal;
