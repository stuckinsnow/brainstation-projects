import './VideoList.scss';

function VideoList(props) {
  return (
    <>
      {props.videoList
        .filter((video) => video.id !== props.activeVideo.id)
        .map((video) => (
          <div
            key={video.id}
            className="video-list__item"
            onClick={() => props.handleChangeActiveVideo(video.id)}
          >
            {video.id}
            <div>{video.title}</div>
            <div>{video.channel}</div>
          </div>
        ))}
    </>
  );
}

export default VideoList;
