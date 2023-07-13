import './HomePage.scss';
import Carousel from '../../Components/Carousel/Carousel';
import { useDocumentTitle } from '../../utils/functions';

function HomePage() { 

  useDocumentTitle('Portfolio'); 

  return (

    <>
      <div className='maindiv'>
        <Carousel />
      </div>
    </>

  );
}

export default HomePage;