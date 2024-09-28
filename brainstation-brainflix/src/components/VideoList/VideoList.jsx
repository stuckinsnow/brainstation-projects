import './VideoList.scss';
import { withEllipsis } from '../../utils/utils';
import { Link } from 'react-router-dom';

function VideoList({ videoList, activeVideo }) {
  
  return (
    <>
      {videoList
        .filter((video) => video.id !== activeVideo.id)
        .map((video) => {
          const videoTitleToEllipsis = withEllipsis(video.title);
          return (
            <Link key={video.id} className="video-list-item" to={`/videos/${video.id}`}>
              <div className='video-list-item__image'><img src={video.image} alt={video.title}/></div>
              <div className='video-list-item__wrapper'>
                <div className='video-list-item__wrapper--title'>{videoTitleToEllipsis}</div>
                <div className='video-list-item__wrapper--author'>{video.channel}</div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default VideoList;
