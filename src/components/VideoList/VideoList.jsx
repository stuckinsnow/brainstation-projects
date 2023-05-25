import './VideoList.scss';
import { withEllipsis } from '../utils/utils';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function VideoList({ videoList, setVideoList, activeVideo, handleChangeActiveVideo  }) {
  console.log('videoList:', videoList);


  



  
  return (
    <>
      {videoList
        .filter((activeVideo) => activeVideo.id !== videoList.id)
        .map((activeVideo) => {

          const videoTitleToEllipsis = withEllipsis(activeVideo.title);

          const divStyle = {
            backgroundImage: `url(${activeVideo.image})`, // used chatGPT for this line of code
          };

          return (

            
            <Link
              key={activeVideo.id}
              className="video-list-item"
              to={`/videos/${activeVideo.id}`}
              // onClick={() => handleChangeActiveVideo(activeVideo.id)}
            >
              {/* {video.id} */}
              <div className='video-list-item__image' style={divStyle}></div>
              <div className='video-list-item__wrapper'>
                <div className='video-list-item__wrapper--title'>{videoTitleToEllipsis}</div>
                <div className='video-list-item__wrapper--author'>{activeVideo.channel}</div>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default VideoList;
