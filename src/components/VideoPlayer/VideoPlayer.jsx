import './VideoPlayer.scss';

function VideoPlayer({activeVideo}) {
    console.log('ACTIVE VIDEO:', activeVideo);

    return (
        <>
            <div className="hero">

  {/* Video controls src api_key=cats */}

                <video controls className="hero__video" poster={activeVideo.image}>
                    <source src={activeVideo.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> 

            </>
    );
}

export default VideoPlayer;