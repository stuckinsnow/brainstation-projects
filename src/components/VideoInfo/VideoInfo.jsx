import './VideoInfo.scss';

function VideoInfo({ activeVideo, formatDate }) {
  const formattedDate = formatDate(activeVideo.timestamp);

  console.log('date:', formattedDate);

  return (
    <>
      <div>
        <h1>{activeVideo.title}</h1>
        <div className='videostats'>
          <article className='videostats__author'>{activeVideo.channel}</article>
          <article className='videostats__videos'>{activeVideo.views}</article>
          <article className='videostats__date'>{formattedDate}</article>
          <article className='videostats__likes'>{activeVideo.likes}</article>
        </div>
        <div className='videoinfo'>{activeVideo.description}</div>
      </div>
    </>
  );
}

export default VideoInfo;
