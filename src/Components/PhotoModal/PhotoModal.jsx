import PhotoModalContent from "./PhotoModalContent"
import "./PhotoModal.scss"

const PhotoModal = ({ currentImage, modalOpen, handleModalClick }) => {

    return (
        
        <>
            <div className={`lightbox ${modalOpen ? 'lightbox--open' : ''}`}>
                {modalOpen === true && 
                
                <PhotoModalContent modalOpen={modalOpen} currentImage={currentImage} 
                handleModalClick={handleModalClick}
                />}

            </div>

        </>
    )
}

export default PhotoModal;