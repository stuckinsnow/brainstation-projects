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
        <div className='maindiv__left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis aspernatur quas a eaque debitis omnis deserunt, qui sequi nesciunt animi ea veniam hic obcaecati nisi, illo mollitia molestiae praesentium!</div>
        <Carousel />
      </div>
    </>

  );
}

export default HomePage;