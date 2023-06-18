import './HomePage.scss';
import Carousel from '../../Components/Carousel/Carousel';
import PhotoUpload from '../../Components/PhotoUpload/PhotoUpload';

function HomePage() {
    return (

      <>
        <Carousel />
        <PhotoUpload />
        <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis voluptates atque a reprehenderit eum nesciunt sapiente consectetur? Voluptas facilis magnam nam soluta. Sequi quo earum saepe facilis in dignissimos.</div>
      </>

    );
}

export default HomePage;