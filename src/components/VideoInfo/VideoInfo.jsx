import './VideoInfo.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';

function VideoInfo({ activeVideo, formatDate }) {
  const formattedDate = formatDate(activeVideo.timestamp);


  // console.log('date:', formattedDate);

  return (
    <>
      <section className='videoinfo'>
        <h1 className='videoinfo__title'>{activeVideo.title}</h1>
        <div className='videoinfo__stats'>
          <div className='videoinfo__stats--spacer'>
            <article className='videoinfo__stats--author'>By {activeVideo.channel}</article>
            <article className='videoinfo__stats--date'>{formattedDate}</article>
          </div>
          <div className='videoinfo__stats--spacer'>
            <article className='videoinfo__stats--views'><img src={viewsIcon} alt="views icon" />{activeVideo.views}</article>
            <article className='videoinfo__stats--likes'><img src={likesIcon} alt="likes icon" />{activeVideo.likes}</article>
          </div>
        </div>
        <div className='videoinfo__description'>{activeVideo.description}</div>
      </section>
    </>
  );
}

export default VideoInfo;
