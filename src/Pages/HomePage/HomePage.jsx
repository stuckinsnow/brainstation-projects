import './HomePage.scss';
import Carousel from '../../Components/Carousel/Carousel';
import { useEffect } from 'react';

function HomePage() { 
  useEffect(() => {
    document.title = 'Portfolio'; 
  }, []);

  return (

    <>
      <div className='maindiv'>
        <Carousel />
      </div>
    </>

  );
}

export default HomePage;