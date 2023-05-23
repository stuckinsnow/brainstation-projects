import './VideoList.scss';
import { withEllipsis } from '../utils/utils';

function VideoList({ VideoListObj, activeVideo, handleChangeActiveVideo }) {
  // console.log('videoList:', videoList);

  return (
    <>
      {VideoListObj
        .filter((video) => video.id !== activeVideo.id)
        .map((video) => {

          const videoTitleToEllipsis = withEllipsis(video.title);

          const divStyle = {
            backgroundImage: `url(${video.image})`, // used chatGPT for this line of code
          };

          return (
            <div
              key={video.id}
              className="video-list-item"
              onClick={() => handleChangeActiveVideo(video.id)}
            >
              {/* {video.id} */}
              <div className='video-list-item__image' style={divStyle}></div>
              <div className='video-list-item__wrapper'>
                <div className='video-list-item__wrapper--title'>{videoTitleToEllipsis}</div>
                <div className='video-list-item__wrapper--author'>{video.channel}</div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default VideoList;
