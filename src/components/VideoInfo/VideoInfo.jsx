import './VideoInfo.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';

function VideoInfo({ activeVideo, formatDate, countComments }) {
  const formattedDate = formatDate(activeVideo.timestamp);

  const numberOfComments = countComments([activeVideo]);

  console.log('date:', formattedDate);

  return (
    <>
      <section className='videoinfo'>
        <h1 className='videoinfo__title'>{activeVideo.title}</h1>
        <div className='videoinfo__stats'>
          <div>
            <article className='videoinfo__stats--author'>By {activeVideo.channel}</article>
            <article className='videoinfo__stats--date'>{formattedDate}</article>
          </div>
          <div>

            <article className='videoinfo__stats--views'><img src={viewsIcon} alt="views icon" />{activeVideo.views}</article>
            <article className='videoinfo__stats--likes'><img src={likesIcon} alt="likes icon" />{activeVideo.likes}</article>
          </div>
        </div>
        <div className='videoinfo__description'>{activeVideo.description}</div>
        <div className='videoinfo__comments'>{numberOfComments} Comments</div>
      </section>
    </>
  );
}

export default VideoInfo;
