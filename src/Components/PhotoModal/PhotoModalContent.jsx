import "./PhotoModal.scss";

const PhotoModalContent = ({currentImage, modalOpen, handleModalClick}) => {

    // console.log(currentImage.currentImage)
    return (

      
        <div id="lightbox" className={`lightbox ${modalOpen ? 'lightbox--open' : 'closed'}`}>

        <div className="image__container">

            <div onClick={handleModalClick}>
                <img className="image__file" src={currentImage} alt="" />


            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quis provident, impedit, mollitia quam quia deleniti qui doloribus illo consectetur fugit iste, fuga eveniet voluptates obcaecati eius quaerat incidunt sit?</p>

            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus cumque maiores quod omnis hic ipsa tenetur, ducimus quis similique eos nobis. Facilis dicta voluptatum ad tempora, perferendis eaque expedita tenetur.</div>
            </div>

            <button onClick={handleModalClick}>Close</button>

        </div>

    </div>

    )

}

export default PhotoModalContent;