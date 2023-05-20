import './VideoList.scss';

function VideoList({ videoList, activeVideo, handleChangeActiveVideo }) {

  console.log('videoList:', videoList);

  return (
    <>
      {videoList
        .filter((video) => video.id !== activeVideo.id)
        .map((video) => (
          <div
            key={video.id}
            className="video-list__item"
            onClick={() => handleChangeActiveVideo(video.id)}
          >
            {/* {video.id} */}
            <div className='videoList__image'><img src={video.image} /></div>
            <div>{video.title}</div>
            <div>{video.channel}</div>
          </div>
        ))}
    </>
  );
}

export default VideoList;